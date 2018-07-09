import { SignatureType } from '@0xproject/types';
import * as ethUtil from 'ethereumjs-util';
import { MnemonicWalletSubprovider } from '@0xproject/subproviders';
import { EIP712Utils, EIP712Schema, EIP712Types } from '@0xProject/order-utils';
import { BigNumber } from '@0xproject/utils';

import { MNEMONIC, BASE_DERIVATION_PATH } from "./zeroExConstants";

const EIP712_ZEROEX_TRANSACTION_SCHEMA: EIP712Schema = {
    name: 'ZeroExTransaction',
    parameters: [
        { name: 'salt', type: EIP712Types.Uint256 },
        { name: 'signerAddress', type: EIP712Types.Address },
        { name: 'data', type: EIP712Types.Bytes },
    ],
};

export const mnemonicWallet = new MnemonicWalletSubprovider({
    mnemonic: MNEMONIC,
    baseDerivationPath: BASE_DERIVATION_PATH,
});

export const signingUtils = {
    async signMessageAsync(
        message: Buffer,
        address: string,
        mnemonicWallet: MnemonicWalletSubprovider,
        signatureType: SignatureType,
    ): Promise<Buffer> {
        if (signatureType === SignatureType.EthSign) {
            const signatureHex = await mnemonicWallet.signPersonalMessageAsync(ethUtil.bufferToHex(message), address);
            const rpcSig = ethUtil.fromRpcSig(signatureHex);
            const signature = Buffer.concat([
                ethUtil.toBuffer(rpcSig.v),
                rpcSig.r,
                rpcSig.s,
                ethUtil.toBuffer(signatureType),
            ]);
            return signature;
        } else {
            throw new Error(`${signatureType} is not a valid signature type`);
        }
    },
    async newSignedTransactionAsync(
        data: string,
        salt: BigNumber,
        signerAddress: string,
        exchangeAddress: string,
        mnemonicWallet: MnemonicWalletSubprovider,
        signatureType: SignatureType = SignatureType.EthSign,
    ): Promise<Buffer> {
        const executeTransactionData = {
            salt,
            signerAddress,
            data,
        };
        const executeTransactionHashBuff = EIP712Utils.structHash(
            EIP712_ZEROEX_TRANSACTION_SCHEMA,
            executeTransactionData,
        );
        const eip721MessageBuffer = EIP712Utils.createEIP712Message(executeTransactionHashBuff, exchangeAddress);
        const signature = await signingUtils.signMessageAsync(
            eip721MessageBuffer,
            signerAddress,
            mnemonicWallet,
            signatureType,
        );
        return signature;
    },
};
