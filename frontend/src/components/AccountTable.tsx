import React from 'react'
import { BankAccount } from '../api'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@mui/material';

interface AccountTableProps {
    accounts: BankAccount[],
    onSelect: (account: BankAccount) => void
    selectedAccountId: number | null
}

export const AccountTable: React.FC<AccountTableProps> = (props) => {
    const {accounts} = props
return (
    <TableContainer component={Box}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Owner</TableCell>
                    <TableCell>Account No</TableCell>
                    <TableCell>Bank</TableCell>
                    <TableCell>Balance</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {accounts.map((account) => (
                    <TableRow
                        key={account.account_no}
                        onClick={() => props.onSelect(account)}
                        style={{
                            cursor: 'pointer',
                            backgroundColor: props.selectedAccountId === account.id ? '#f0f8ff' : 'transparent',
                        }}
                        onMouseEnter={(e) => {
                            if (props.selectedAccountId !== account.id) {
                                (e.currentTarget as HTMLElement).style.backgroundColor = '#f5f5f5';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (props.selectedAccountId !== account.id) {
                                (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                            }
                        }}
                    >
                        <TableCell>{account.id}</TableCell>
                        <TableCell>{account.owner}</TableCell>
                        <TableCell>{account.account_no}</TableCell>
                        <TableCell>{account.bank_name}</TableCell>
                        <TableCell>${account.balance.toFixed(2)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);
}
