import OracleProvider from './OracleProvider.js'
import debug from 'debug'
// import config from '../meta/config.js'

const log = debug('oracle:provider:bitrue')

export default class Bitrue extends OracleProvider {
  constructor () {
    super()
    log('Hi')
  }

  async get () {
    try {
      const data = await this.getJSON('https://www.bitrue.com/api/v1/ticker/price?symbol=XAHUSDT')
      const XahUsdt = Number(data?.price) || undefined
      log(`Calling, result: ${XahUsdt}`)
      return XahUsdt
    } catch (e) {
      log('Error', e.message)
      return undefined
    }
  }
}
