# Algorand Wallet

Create anglorand wallet with the listed functionalities

## Adding to your project

> include algosdk.min.js
```
<script src="path_to_library/algosdk.min.js"></script>
```
> include wallet library
```
<script src="path_to_library/main.js"></script>
```

## Functionalities
    doAccountCreation,
    doGetAccountDetails,
    doGetAccountTransactions,
    doAlgoTransfer,
    doGetAssetDetails, 
    doCreateAsset,
    doDestroyAsset,  
    doAssetOptin,
    doAssetOptinRemoval, 
    doAssetTransfer

```
1.doAccountCreation():
Function on call will create a mnemonics(which will manage an account), that has to be stored secure.

@retun
{
            address:  ,
            mnemonic: 
}
```

```
2.doGetAccountDetails(algodClient,address):
Function on call will fetch details of the account provided.

@params
address: account public address

@return
{
    accountDetaials
}
```

2.1 doGetAccountTransactions(indexerClinet,address):
Fetches all trasactions of address

@params
address: account public address

@return
{
    {trasactions[]}
}
```

```
3.doAlgoTransfer(algodClient,sender_mnemonic,recipient,value):
Function on call will transfer algo from one account to another.

@params
sender: sender account public address
recipient: recipient account public address
value: value to be transfered

@return
{
    txHash
}
```

```
4.doGetAssetDetails(algodClient,address):
Function on call will fetch the asset details of a particular account.

@params
address: account public address

@return
{
    assetDetails
}
```

```
5.doCreateAsset(algodClient, minter_mnemonic,decimals,totalIssuance,unitName,assetName,assetURL,manager,reserve,freeze,clawback):
Function on call will create an asset (ASA) in the network.

@params
decimals: deciamals to the asset
totalIssuance: total no of asset(varies as the number of decimal varies)
unitName: unit name of the aset(symbol)
assetName: asset name (name of the token)
assetURL: asset url
manager: manager account public address
reserve: reserve account public address
freeze: freeze account public address
clawback: clawback account public address

@return
{
    txHash
}
```

```
6.doDestroyAsset(client, minter_mnemonic,assetID):
Function on call will destroy the asset with provided asset id.

@params
assetID: Asset id of the asset

@return
{
    txHash
}
```

```
7.doAssetOptin(client, optin_mnemonic,assetID):
Fucntion on call will optin to an asset with the provided asset id.

@params
assetID: Asset id of the asset

@return
{
    txHash
}
```

```
8.doAssetOptinRemoval(client, optin_mnemonic,assetID):
Function on call will remove optin to an asset with the provied asset id.

@params
assetID: Asset id of the asset

@return
{
    txHash
}
```

```
9.doAssetTransfer(client, sender_mnemonic,assetID,sender,recipient,amount):
Function on call will transfer asset from one account to another with the asset id provided.

@params
assetID: Asset id of the asset
sender: sender account public address
recipient: recipient account public address
amount: amount to be transfered

@return
{
    txHash
}
```


# Faucet API Specifications
Faucet API exposes an endpoint that can be used to dispense a small quantity of Algorand tokens (Algo) to a particular account, without charging a fee for the service.
>The faucet service is free of cost from the perspective of a restaurant, but not ours, since we paid real money to purchase the mainnet Algo tokens.

>Exchange Rate on 15th Feb 2021: 1 ALGO = 1.5 USD

## Methods
### 1. Request for Algo Token

The endpoint acts like a faucet, used to dispense free Algo tokens to restaurants. So that restaurants/buying.com’s clients can easily send transactions to the Algorand network.

#### Request

|Method|Endpoint|
|----|----|
|POST|/api/v1/algorand/faucet

#### Body

|Params|Values|
|----|------|
|_receiverAddress|string|
|_amount|number|

#### _receiverAddress:

the algorand public address/key of the restaurant to which the tokens are to be issued.

#### _amount:

the number of Algo tokens to be dispensed.

>Example POST data: raw JSON
```
{

“_receiverAddress“: “public-address“,

“_amount“: 10

}
```

#### Response

|Status|Response|
|--------|-------|
|200|{“success“: true}|
|400|{"error": "Please specify the recipient’s public address"}|
|400|{"error": "Please specify the amount of Algo tokens to be dispensed"}|
|500|{"error": "Something went wrong. Please try again later."}|



 
