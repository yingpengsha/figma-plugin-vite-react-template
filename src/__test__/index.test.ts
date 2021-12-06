import func from '..'

describe('index.ts test', () => {
  const { log } = console
  const { warn } = console
  beforeEach(() => {
    console.log = jest.fn()
    console.warn = jest.fn()
  })
  afterAll(() => {
    console.log = log
    console.warn = warn
  })

  test('index.ts is normal running', () => {
    func()

    // @ts-ignore
    const logs = console.log.mock.calls

    expect(logs).toEqual([
      ['Welcome to use this template!']
    ])
  })
})
