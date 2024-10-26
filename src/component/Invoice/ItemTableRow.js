import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { ItemTableFieldWidth } from '../../constants/Helper'
import { COLOR } from '../../constants/Colors'

const ItemTableRow = ({
    sr = 0,
    data,
}) => {
    return (
        <View style={[styles.Container, parseInt(sr) % 2 == 0 && { backgroundColor: COLOR.BORDERCOLOR }]}>
            <Text style={[styles.TextStyle, { width: ItemTableFieldWidth[0] }]}>{sr}</Text>
            <Text style={[styles.TextStyle, { width: ItemTableFieldWidth[1], textAlign: 'left' }]}>{data.name}</Text>
            <Text style={[styles.TextStyle, { width: ItemTableFieldWidth[2] }, styles.TextRightAlign]}>₹ {data.price}</Text>
            <Text style={[styles.TextStyle, { width: ItemTableFieldWidth[3] }]}>{data.qty}</Text>
            <Text style={[styles.TextStyle, { width: ItemTableFieldWidth[4] }, styles.TextRightAlign]}>₹ {parseFloat(data.total).toFixed(2).toString()}</Text>
        </View>
    )
}

export default memo(ItemTableRow)

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: COLOR.WHITE,
        paddingVertical: 7,
        borderRadius: 10,
        alignItems: 'center',
    },
    TextStyle: {
        textAlign: 'center',
        color: COLOR.BLACK,
        padding: 5,
        fontSize: 12,
    },
    TextRightAlign: {
        textAlign: 'right',
        paddingRight: 7,
    }
})