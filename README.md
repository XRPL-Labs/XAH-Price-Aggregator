# XAH Price Aggregator

Fetches XAH (Xahau) (USD) prices from data sources, filters out values based on stdev.
Data providers are called in parallel, after which a number of requests (possibly: retries)
are being executed with a delay per request.

Background info: https://dev.to/wietse/aggregated-xrp-usd-price-info-on-the-xrp-ledger-1087

The default values:

  - 3 calls per dataprovider  
    Override env.: `ORACLE_PROVIDER_CALL_COUNT=..`
  - 2 second delay per request  
    Override env.: `ORACLE_PROVIDER_CALL_DELAY_SEC=..`

## Data sources

  - Bitrue

## Config

This code looks for environment vars, eg. the Cryptowatch provider requires an API key. 
See `/.env.sample` for required env. vars, and copy `.env.sample` to `.env`.

## Logging

Run with `DEBUG=oracle*` (prefixed) to read debug output. This is automatically prepended when
running `npm run dev`.

## Output format sample

```javascript
{
  rawResultsNamed: {
    Bitrue: [ 0.2605, 0.26059, 0.26051 ]
  },
  rawResults: [
    0.260529,   0.2605,  0.26059
  ],
  rawMedian: 0.26084,
  rawStdev: 0.00024097781763835502,
  filteredResults: [
    0.26084, 0.26084
  ],
  filteredMedian: 0.26108,
  filteredMean: 0.260995
}
```
