import { useEffect, useState } from 'react'

const KEYS = [
  { id: 'clear', label: 'C', kind: 'ghost' },
  { id: 'back', label: '⌫', kind: 'ghost' },
  { id: 'percent', label: '%', kind: 'ghost' },
  { id: 'divide', label: '÷', kind: 'op', op: '/' },
  { id: '7', label: '7', kind: 'digit' },
  { id: '8', label: '8', kind: 'digit' },
  { id: '9', label: '9', kind: 'digit' },
  { id: 'multiply', label: '×', kind: 'op', op: '*' },
  { id: '4', label: '4', kind: 'digit' },
  { id: '5', label: '5', kind: 'digit' },
  { id: '6', label: '6', kind: 'digit' },
  { id: 'subtract', label: '−', kind: 'op', op: '-' },
  { id: '1', label: '1', kind: 'digit' },
  { id: '2', label: '2', kind: 'digit' },
  { id: '3', label: '3', kind: 'digit' },
  { id: 'add', label: '+', kind: 'op', op: '+' },
  { id: 'sign', label: '±', kind: 'ghost' },
  { id: '0', label: '0', kind: 'digit' },
  { id: 'dot', label: '.', kind: 'digit' },
  { id: 'equals', label: '=', kind: 'equals' },
]

const OP_LABEL = { '+': '+', '-': '−', '*': '×', '/': '÷' }

function formatNumber(value) {
  if (!Number.isFinite(value)) return 'Error'
  const rounded = Math.round(value * 1e10) / 1e10
  const text = String(rounded)
  if (text.replace('-', '').replace('.', '').length > 12) {
    return rounded.toExponential(6).replace(/\.?0+e/, 'e')
  }
  return text
}

function calculate(left, operator, right) {
  if (operator === '+') return left + right
  if (operator === '-') return left - right
  if (operator === '*') return left * right
  if (operator === '/') return right === 0 ? NaN : left / right
  return right
}

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [stored, setStored] = useState(null)
  const [operator, setOperator] = useState(null)
  const [fresh, setFresh] = useState(true)
  const [expression, setExpression] = useState('')

  function inputDigit(digit) {
    setDisplay((current) => {
      if (fresh) return digit
      if (current === '0') return digit
      if (current === '-0') return `-${digit}`
      if (current.replace('-', '').replace('.', '').length >= 12) return current
      return current + digit
    })
    setFresh(false)
  }

  function inputDot() {
    setDisplay((current) => {
      if (fresh) return '0.'
      if (current.includes('.')) return current
      return `${current}.`
    })
    setFresh(false)
  }

  function clearAll() {
    setDisplay('0')
    setStored(null)
    setOperator(null)
    setFresh(true)
    setExpression('')
  }

  function backspace() {
    if (fresh) return
    setDisplay((current) => {
      if (current.length <= 1 || (current.startsWith('-') && current.length <= 2)) return '0'
      return current.slice(0, -1)
    })
  }

  function percent() {
    const value = Number(display)
    if (!Number.isFinite(value)) return
    const next = formatNumber(value / 100)
    setDisplay(next)
    setFresh(true)
  }

  function toggleSign() {
    setDisplay((current) => {
      if (current === '0' || current === 'Error') return current
      return current.startsWith('-') ? current.slice(1) : `-${current}`
    })
    setFresh(false)
  }

  function applyOperator(nextOperator) {
    const current = Number(display)
    if (!Number.isFinite(current)) {
      clearAll()
      return
    }

    if (operator && stored !== null && !fresh) {
      const result = calculate(stored, operator, current)
      const text = formatNumber(result)
      setDisplay(text)
      setStored(Number.isFinite(result) ? result : null)
      setOperator(Number.isFinite(result) ? nextOperator : null)
      setExpression(Number.isFinite(result) ? `${text} ${OP_LABEL[nextOperator]}` : '')
      setFresh(true)
      return
    }

    setStored(current)
    setOperator(nextOperator)
    setExpression(`${formatNumber(current)} ${OP_LABEL[nextOperator]}`)
    setFresh(true)
  }

  function equals() {
    if (operator === null || stored === null) return
    const current = Number(display)
    const result = calculate(stored, operator, current)
    const text = formatNumber(result)
    setExpression(`${formatNumber(stored)} ${OP_LABEL[operator]} ${formatNumber(current)} =`)
    setDisplay(text)
    setStored(null)
    setOperator(null)
    setFresh(true)
  }

  function press(key) {
    if (display === 'Error' && key.id !== 'clear') {
      clearAll()
      if (key.kind !== 'digit' && key.id !== 'dot') return
    }
    if (key.kind === 'digit') inputDigit(key.label)
    else if (key.id === 'dot') inputDot()
    else if (key.kind === 'op') applyOperator(key.op)
    else if (key.id === 'equals') equals()
    else if (key.id === 'clear') clearAll()
    else if (key.id === 'back') backspace()
    else if (key.id === 'percent') percent()
    else if (key.id === 'sign') toggleSign()
  }

  useEffect(() => {
    function onKeyDown(event) {
      const { key } = event
      if (/^[0-9]$/.test(key)) {
        inputDigit(key)
        return
      }
      if (key === '.') inputDot()
      else if (key === '+') applyOperator('+')
      else if (key === '-') applyOperator('-')
      else if (key === '*') applyOperator('*')
      else if (key === '/') {
        event.preventDefault()
        applyOperator('/')
      } else if (key === 'Enter' || key === '=') {
        event.preventDefault()
        equals()
      } else if (key === 'Escape') clearAll()
      else if (key === 'Backspace') backspace()
      else if (key === '%') percent()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  })

  return (
    <section className="calc-page">
      <style>{`
        .calc-page {
          min-height: calc(100vh - 220px);
          display: grid;
          place-items: center;
          padding: 48px 20px 72px;
        }
        .calc {
          width: min(360px, 100%);
          padding: 22px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(16, 24, 36, 0.96), rgba(8, 12, 18, 0.96));
          border: 1px solid rgba(110, 170, 220, 0.28);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
        }
        .calc-screen {
          min-height: 108px;
          margin-bottom: 18px;
          padding: 16px 18px;
          border-radius: 18px;
          background: rgba(4, 8, 14, 0.85);
          border: 1px solid rgba(62, 203, 255, 0.16);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          gap: 6px;
        }
        .calc-expression {
          min-height: 20px;
          color: #8ea0b8;
          font-size: 14px;
          letter-spacing: 0.04em;
        }
        .calc-display {
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #f4f7fb;
          font-family: Outfit, sans-serif;
          font-size: 42px;
          font-weight: 650;
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .calc-keys {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        .calc-key {
          height: 64px;
          border: 0;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.06);
          color: #f4f7fb;
          font-family: Outfit, sans-serif;
          font-size: 22px;
          cursor: pointer;
        }
        .calc-key:hover { background: rgba(255, 255, 255, 0.12); }
        .calc-key:active { transform: translateY(1px); }
        .calc-key.ghost { color: #3ecbff; background: rgba(62, 203, 255, 0.08); }
        .calc-key.op { background: rgba(62, 203, 255, 0.18); color: #d9f6ff; }
        .calc-key.equals { background: #3ecbff; color: #06202c; font-weight: 700; }
        .calc-key.equals:hover { background: #67d7ff; }
      `}</style>
      <div className="calc" aria-label="Calculator">
        <div className="calc-screen">
          <div className="calc-expression">{expression}</div>
          <div className="calc-display" aria-live="polite">{display}</div>
        </div>
        <div className="calc-keys">
          {KEYS.map((key) => (
            <button
              key={key.id}
              type="button"
              className={`calc-key ${key.kind === 'digit' ? '' : key.kind}`}
              onClick={() => press(key)}
            >
              {key.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
