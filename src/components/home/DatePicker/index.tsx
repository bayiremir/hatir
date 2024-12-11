import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {setSelectedDate} from '../../../redux/slices/userSlice';
import {COLORS} from '../../../constants/COLORS';
import {Fonts} from '../../../interfaces/fonts.enum';

const DatePicker = ({onDateChange}) => {
  const days = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
  const months = [
    'Oca',
    'Şub',
    'Mar',
    'Nis',
    'May',
    'Haz',
    'Tem',
    'Ağu',
    'Eyl',
    'Eki',
    'Kas',
    'Ara',
  ];
  const currentDate = new Date();
  const selectedDate = useSelector(
    (state: {user: {selectedDate: string}}) => state.user.selectedDate,
  );
  const dispatch = useDispatch();

  const getDayText = offset => {
    const d = new Date(currentDate);
    d.setDate(d.getDate() + offset);

    const dayIndex = d.getDay();
    const dayName = days[dayIndex];
    const dayNumber = d.getDate().toString().padStart(2, '0');
    const monthName = months[d.getMonth()];

    if (offset === -2) return ` ${dayName} ${dayNumber} ${monthName}`;
    if (offset === -1) return `Dün`;
    if (offset === 0) return `Bugün`;
    if (offset === 1) return `Yarın`;
    return `${dayName} ${dayNumber} ${monthName}`;
  };

  const dateOffsets = [-2, -1, 0, 1, 2, 3, 4];

  const handleDateChange = offset => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + offset);
    const formattedDate = newDate.toISOString().split('T')[0];
    console.log(`Selected date: ${formattedDate}`); // Log the selected date
    dispatch(setSelectedDate(formattedDate)); // Redux'taki seçili tarihi güncelle
    if (onDateChange) {
      onDateChange(offset); // Tab.Navigator'daki sekme değişimini tetikle
    }
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}>
      {dateOffsets.map((offset, index) => {
        const dateToCompare = new Date(currentDate);
        dateToCompare.setDate(dateToCompare.getDate() + offset);
        const formattedDate = dateToCompare.toISOString().split('T')[0];
        const isSelected = formattedDate === selectedDate; // Redux'taki tarih kontrolü
        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.dateContainer,
              isSelected && styles.selectedContainer,
            ]}
            onPress={() => handleDateChange(offset)}>
            <Text style={[styles.dateText, isSelected && styles.selectedText]}>
              {getDayText(offset)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  dateContainer: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  dateText: {
    fontSize: 14,
    fontFamily: Fonts.Regular,
    color: '#d9d9d9',
  },
  selectedContainer: {
    borderBottomWidth: 3,
    borderColor: COLORS.macizCinnabar,
  },
  selectedText: {
    fontFamily: Fonts.Bold,
    color: COLORS.macizWhite,
  },
});
