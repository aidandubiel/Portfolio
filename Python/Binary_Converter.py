def to_binary(decimal):
    quotient = decimal
    remainders = [] 
    while quotient > 0:
        quotient, remainder = divmod(quotient,2)
        remainders.append(remainder)
    

    output = "".join(str(bit) for bit in reversed(remainders))

    return output


to_binary(5)
