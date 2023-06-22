import {Platform, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import React from 'react';
import {variables} from '../../../style/variables';
import BoardAll from './BoardAll';
import BoardCustom from './BoardCustom';

const deviceHeight = Dimensions.get('window').height;

const boardDatas = [
  {type: 'BoardAll', number: 65},
  {type: 'BoardCustom', title: '공부', number: 6, color: variables.Mater_6},
  {type: 'BoardCustom', title: '운동', number: 13, color: variables.Mater_13},
  {type: 'BoardCustom', title: '루틴', number: 10, color: variables.Mater_3},
  {type: 'BoardCustom', title: '모임', number: 9, color: variables.Mater_8},
  {type: 'BoardCustom', title: '업무', number: 27, color: variables.Mater_1},
];

const BoardPack = () => {
  const renderItem = ({item}: {item: any}) => {
    if (item.type === 'BoardAll') {
      return <BoardAll number={item.number} />;
    } else if (item.type === 'BoardCustom') {
      return <BoardCustom title={item.title} number={item.number} color={item.color} />;
    }
    return null;
  };

  const sliderHeight = Platform.select({
    ios: deviceHeight / 1.4,
    android: deviceHeight / 1.31,
  });
  const itemHeight = Platform.select({
    ios: 210,
    android: 210,
  });

  return (
    <Carousel
      data={boardDatas}
      renderItem={renderItem}
      layout={'default'}
      sliderHeight={sliderHeight}
      itemHeight={itemHeight}
      vertical={true}
      loop={true}
      inactiveSlideOpacity={0.7}
    />
  );
};

export default BoardPack;