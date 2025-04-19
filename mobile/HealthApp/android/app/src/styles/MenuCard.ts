import { StyleSheet } from 'react-native';

const MenuCard = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 12,
    elevation: 2,
    alignItems: 'center',
  },
  icon: { width: 32, height: 32, marginBottom: 8 },
  title: { fontSize: 16, fontWeight: '600' },
  desc: { fontSize: 12, color: '#666', textAlign: 'center' },
});

export default MenuCard;
