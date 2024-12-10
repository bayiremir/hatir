import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedDate} from '../../../redux/slices/userSlice';
import DatePicker from '../DatePicker';

const CustomTabBar = ({state, navigation, baseDate, daysOffset}) => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(state => state.user.selectedDate); // Redux'taki tarih
  console.log('selectedDate', selectedDate);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const base = new Date(baseDate);
    const generatedDates = daysOffset.map(offset => {
      const d = new Date(base);
      d.setDate(d.getDate() + offset);
      return d;
    });
    setDates(generatedDates);
  }, [baseDate, daysOffset]);

  useEffect(() => {
    const selectedRouteName = state.routeNames[state.index];
    if (selectedDate !== selectedRouteName) {
      dispatch(setSelectedDate(selectedRouteName));
    }
  }, [state.index, state.routeNames, selectedDate, dispatch]);

  const handleDateSelect = selectedDateFromPicker => {
    navigation.navigate(selectedDateFromPicker); // Tarih formatı "20241210" şeklinde olmalı
  };

  return (
    <View style={styles.container}>
      <DatePicker
        onDateSelected={handleDateSelect}
        baseDate={baseDate}
        daysOffset={daysOffset}
      />
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
