userSys = {'name':'Bob','sys':'Win'}
userLang = {'name':'Bob','lang':'Python'}
dict = userSys|userLang
print('\nDictionary:',dict)

print('\nLanguage:',dict['lang'])
print('\nName:',dict['name'])
print('\bKeys:',dict.keys())