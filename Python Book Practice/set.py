zoo = ('Kangaroo','Leopard','Moose')
print('Tuple:',zoo,'\tLength:',len(zoo))
print(type(zoo))

bag = {'Red','Green','Blue'}
bag.add('Yellow')
print('\nSet',bag,'\tLength:',len(bag))

print('\nIs green in bag set?:','Yes' if 'Green' in bag else 'No')
print('\nIs purple in bag set?:','Yes' if 'Purple' in bag else 'No')

box = {'Red','Purple','Yellow'}
print('\nSet:',box,'\t\tLength:',len(box))
print('Common to both sets:',bag.intersection(box))
print('Differences between both sets:',bag.difference(box))
