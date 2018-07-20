const BtcNetworks = require('../services/wallet/btc/networks')
const LnsNetworks = require('../services/wallet/lns/networks')
const EthNetworks = require('../services/wallet/eth/networks')

module.exports = {
  BTC: BtcNetworks.BTC,
  BTCTESTNET: BtcNetworks.BTCTESTNET,
  BCH: BtcNetworks.BCH,
  BCHTESTNET: BchNetworks.BCHTESTNET,
  LTC: BtcNetworks.LTC,
  LTCTESTNET: BtcNetworks.LTCTESTNET,
  DASH: BtcNetworks.DASH,
  DASHTESTNET: BtcNetworks.DASHTESTNET,
  ETH: EthNetworks.ETH,
  ROPSTEN: EthNetworks.ROPSTEN,
  LNS: LnsNetworks.LNS,
  LNSTESTNET: LnsNetworks.LNSTESTNET
}
