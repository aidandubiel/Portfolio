function fahrenheitToCelsius(degrees)
  offSetDegrees = degrees - 32
  conversionFactor = 5/9
  return offSetDegrees * conversionFactor
end

function fahrenheitToKelvin(degrees)
  degreeCelsius = fahrenheitToCelsius(degrees) 
  return degreeCelsius + 273.15
end

function convertTemperature(targetUnit, degrees)
  correctedString = string.lower(targetUnit)
  if correctedString == "kelvin" then
    return fahrenheitToKelvin(degrees)
  elseif correctedString == "celsius" then
    return fahrenheitToCelsius(degrees)
  else print("Invalid Input") 
    return nil  
  end
end

inputDegrees = 23
convertedDegrees = convertTemperature("Kelvn", inputDegrees)
print(convertedDegrees)
