 --------------Potion Catalog--------------

debug = {
  desc = "Debug Potion: An expulsion type potion, great for evicting bugs.",
  price = 404,
  quant = 0
}

loop = {
  desc = "Loop Potion: A repitition type potion, effective for menial tasks.",
  price = 222,
  quant = 0
}

byte = {
  desc = "Byte Potion: A healing potion. Used to salve bites.",
  price = 101,
  quant = 0
}
--------------Potion Catalog--------------



--------------Tax structure--------------
salesTax = 0.07
addedTax = 0 
--------------Tax structure--------------


--------------Variables--------------
customerTotal = 0 
customerItemization = ""
discountCode = "ABC"
--------------Variables--------------

--------------User Input--------------

debug.quant = 1
loop.quant = 1
byte.quant = 1
discount = ""

--------------User Input--------------

--------------Transactions--------------
if debug.quant > 0 then
  customerItemization = "\n" .. "(" ..debug.quant .. ") - " .. debug.desc ..  " $" .. (debug.quant * debug.price) .. "\n"
end
if loop.quant > 0 then
  customerItemization = customerItemization .. "(" .. loop.quant .. ") - ".. loop.desc .. " $" .. (loop.quant * loop.price) .. "\n"
end
if byte.quant > 0 then
  customerItemization = customerItemization .. "(" .. byte.quant .. ") - " .. byte.desc .. " $" .. (byte.quant * byte.price) .."\n"
end

if debug.quant and loop.quant and byte.quant == 0 then 
  customerItemization = "None"
end
customerTotal = customerTotal + addedTax
totalItems = debug.quant + loop.quant + byte.quant

subtotal = (debug.quant * debug.price) + (loop.quant * loop.price) + (byte.quant * byte.price)
addedTax = subtotal * salesTax
total = subtotal + addedTax
if discount == discountCode then
  discountApplied = "-$" .. (total * .1)
  total = total * .9
else discountApplied = "None"
end
--------------Transactions--------------


--------------Receipt--------------
print("Customer Items: " .. customerItemization)
print("Total Items purchased: " .. totalItems)
print("Customer Subtotal: $" .. subtotal)
print("Tax (7%): $" .. addedTax)
print("Discount: " .. discountApplied)
print("Total: $" .. total)
--------------Receipt--------------




