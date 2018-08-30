import React from 'react';
import { FlatList, View } from 'react-native';
import { headerBottomSpace, overviewListNumColumns } from '../../constants/theme';
import overviewListStyle from '../../styles/overviewListStyle';
import { OverviewListItemContainer } from '../container/OverviewListItemContainer';

export class OverviewList extends React.PureComponent {
  state = {selected: (new Map())};

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _renderItem = ({item}) => (
    item && item.id ?
    <OverviewListItemContainer
      navigation={this.props.navigation}
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      item={item}
    />
    :
    null
  );

  _endReached = () => {
    this.props.endReached && this.props.endReached();
  }

  _refresh = () => {
    this.props.refresh && this.props.refresh();
  }

  render() {
    const {
      data,
      isLoading
    } = this.props;

    return (
      <FlatList
        ListHeaderComponent={<View style={{height: headerBottomSpace}}></View>}
        // initialNumToRender={12}
        numColumns={overviewListNumColumns}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        style={overviewListStyle.flatList}
        data={data}
        refreshing={isLoading}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        onEndReached={this._endReached}
        onRefresh={this._refresh}
        // ItemSeparatorComponent={() => <Separator />}
      />
    );
  }
}