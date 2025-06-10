import { Input } from '@/components/ui/input'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from '@/components/ui/select'
import React from 'react'

function InputBox({
    label,
    amount,
    onamountChange,
    selectedcurrency,
    oncurrencychange,
    currencyoptions = [],
    changeAmountDisable = false
}) {
    return (
        <div className="bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 p-6 rounded-2xl shadow-md w-full max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <label className="block text-sm font-semibold text-blue-800 mb-2">
                        {label}
                    </label>
                    <Input
                        type="number"
                        value={amount}
                        onChange={(e) => onamountChange && onamountChange(e.target.value)}
                        className="w-full border border-blue-300 focus:ring-2 focus:ring-blue-500 rounded-lg"
                        placeholder="Enter amount"
                        disabled={changeAmountDisable}
                    />
                </div>

                <div className="flex-1">
                    <label className="block text-sm font-semibold text-blue-800 mb-2">
                        Currency Type
                    </label>
                    <Select
                        value={selectedcurrency}
                        onValueChange={(value) => oncurrencychange && oncurrencychange(value)}
                    >
                        <SelectTrigger className="w-full border border-blue-300 focus:ring-2 focus:ring-blue-500 rounded-lg text-blue-800">
                            <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-blue-200 shadow-lg">
                            {currencyoptions.map((currency) => (
                                <SelectItem
                                    key={currency}
                                    value={currency}
                                    className="hover:bg-blue-100 text-blue-700"
                                >
                                    {currency}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
    )
}

export default InputBox
