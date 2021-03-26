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
