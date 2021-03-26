
/**
 * @author Deepu TG | deepu.tg@netobjex.com
 */

/**
 * Returns address and mnemonic for algorand account
 * @returns {address,mnemonic}
 */
async function doAccountCreation() {
  try {
    let keys = algosdk.generateAccount();
    let mnemonic = algosdk.secretKeyToMnemonic(keys.sk);
    return ({
      address: keys.addr,
      mnemonic: mnemonic
    })
  }
  catch (e) {
    throw e;
  }
}

function createAlgodClient(server, port = '', token) {
  return new algosdk.Algodv2(token, server, port);
}

async function doGetAccountDetails(client, address) {
  try {
    let account_info = (await client.accountInformation(address).do());
    return (account_info);
  }
  catch (e) {
    throw e;
  }
}

async function doAlgoTransfer(client, sender_mnemonic, recipient, value) {
  var senderAccount = algosdk.mnemonicToSecretKey(sender_mnemonic);
  try {
    let params = await client.getTransactionParams().do();
    const from = senderAccount.addr;
    const to = recipient;
    params.fee = 1000;
    params.flatFee = true;
    let result = Math.pow(10, 6);
    let amount = result * value;
    let note = algosdk.encodeObj("Sending algorand");

    let txn = algosdk.makePaymentTxnWithSuggestedParams(from, to, amount, undefined, note, params, undefined);

    let signedTxn = txn.signTxn(senderAccount.sk);
    let tx = (await client.sendRawTransaction(signedTxn).do());
    return ({
      txHash: tx.txId
    })
  }
  catch (e) {
    throw (e);
  }
}

async function doGetAssetDetails(client, address) {
  try {
    let account_info = (await client.accountInformation(address).do());
    return ({
      asset: account_info.assets
    })
  }
  catch (e) {
    throw (e);
  }
}

async function doCreateAsset(client, minter_mnemonic, decimals, totalIssuance, unitName, assetName, assetURL, manager, reserve, freeze, clawback) {
  try {
    var minterAccount = algosdk.mnemonicToSecretKey(minter_mnemonic);
    let params = await client.getTransactionParams().do();
    let note = algosdk.encodeObj("Asset Creation");
    let addr = minterAccount.addr;
    let defaultFrozen = false;
    let assetMetadataHash = undefined;
    let txn = algosdk.makeAssetCreateTxnWithSuggestedParams(addr, note,
      totalIssuance, decimals, defaultFrozen, manager, reserve, freeze,
      clawback, unitName, assetName, assetURL, assetMetadataHash, params);
    let rawSignedTxn = txn.signTxn(minterAccount.sk);
    let tx = (await client.sendRawTransaction(rawSignedTxn).do());
    return ({
      txHash: tx.txId
    })
  }
  catch (e) {
    throw (e);
  }
}

async function doDestroyAsset(client, minter_mnemonic, assetID) {
  try {
    var minterAccount = algosdk.mnemonicToSecretKey(minter_mnemonic);
    let params = await client.getTransactionParams().do();
    let addr = minterAccount.addr;
    let note = algosdk.encodeObj("Asset Destroying");
    let txn = algosdk.makeAssetDestroyTxnWithSuggestedParams(addr, note, assetID, params);
    let rawSignedTxn = txn.signTxn(minterAccount.sk);
    let tx = (await client.sendRawTransaction(rawSignedTxn).do());
    return ({
      txHash: tx.txId
    })
  }
  catch (e) {
    return (e);
  }
}

async function doAssetOptin(client, optin_mnemonic, assetID) {
  try {
    var optinAddress = algosdk.mnemonicToSecretKey(optin_mnemonic);
    let params = await client.getTransactionParams().do();
    let sender = optinAddress.addr;;
    let recipient = optinAddress.addr;
    let revocationTarget = undefined;
    let closeRemainderTo = undefined;
    let note = algosdk.encodeObj("Asset Op-in");
    let amount = 0;
    let txn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, recipient, closeRemainderTo, revocationTarget,
      amount, note, assetID, params);
    let rawSignedTxn = txn.signTxn(optinAddress.sk)
    let tx = (await client.sendRawTransaction(rawSignedTxn).do());
    return ({
      txHash: tx.txId
    })
  }
  catch (e) {
    throw (e);
  }
}

async function doAssetOptinRemoval(client, optin_mnemonic, minterAddress, assetID) {
  try {
    var optinAccount = algosdk.mnemonicToSecretKey(optin_mnemonic);
    let params = await client.getTransactionParams().do();
    let sender = optinAccount.addr;
    let recipient = minterAddress;
    let revocationTarget = undefined;
    let closeRemainderTo = minterAddress;
    let note = algosdk.encodeObj("Asset Opt-in removal");
    let amount = 0;
    let txn = algosdk.makeAssetTransferTxnWithSuggestedParams(sender, recipient, closeRemainderTo, revocationTarget,
      amount, note, assetID, params);
    let rawSignedTxn = txn.signTxn(optinAccount.sk)
    let tx = (await client.sendRawTransaction(rawSignedTxn).do());
    return ({
      txHash: tx.txId
    })
  }
  catch (e) {
    throw (e);
  }
}

async function doAssetTransfer(client, sender_mnemonic, assetID, recipient, amount) {
  try {
    var senderAccount = algosdk.mnemonicToSecretKey(sender_mnemonic);
    let params = await client.getTransactionParams().do();
    let revocationTarget = undefined;
    let closeRemainderTo = undefined;
    let note = algosdk.encodeObj("Asset Transfer");
    let txn = algosdk.makeAssetTransferTxnWithSuggestedParams(senderAccount.addr, recipient, closeRemainderTo, revocationTarget,
      amount, note, assetID, params);
    let rawSignedTxn = txn.signTxn(senderAccount.sk)
    let tx = (await client.sendRawTransaction(rawSignedTxn).do());
    return ({
      txHash: tx.txId
    })
  }
  catch (e) {
    throw (e);
  }
}