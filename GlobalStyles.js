import * as StyleSheet from './utils/StyleSheet';

import Breakpoints from './utils/Breakpoints';

export const ImageStyles = theme =>
  StyleSheet.create({ Image: { height: 100, width: 100 } });

export const TextStyles = theme =>
  StyleSheet.create({ Text: { color: theme.colors.strong } });

export const WebViewStyles = theme =>
  StyleSheet.create({ 'HTML View': { flex: 1 } });

export const HStackStyles = theme =>
  StyleSheet.create({
    'H Stack': { alignItems: 'center', flexDirection: 'row' },
  });

export const AudioPlayerStyles = theme =>
  StyleSheet.create({
    'Audio Player': {
      alignItems: 'center',
      borderRadius: 8,
      borderWidth: 1,
      flexDirection: 'row',
      padding: 8,
    },
  });

export const YoutubePlayerStyles = theme =>
  StyleSheet.create({ 'Youtube Player': { height: 250 } });

export const TableStyles = theme => StyleSheet.create({ Table: { flex: 1 } });

export const TableCellStyles = theme =>
  StyleSheet.create({ 'Table Cell': { flex: 1, flexDirection: 'row' } });

export const DeckSwiperStyles = theme =>
  StyleSheet.create({ 'Deck Swiper': { position: 'absolute' } });

export const DeckSwiperCardStyles = theme =>
  StyleSheet.create({
    'Deck Swiper Card': {
      alignItems: 'center',
      borderWidth: 2,
      justifyContent: 'center',
      padding: 20,
    },
  });

export const SwiperStyles = theme =>
  StyleSheet.create({ Swiper: { height: 300, width: '100%' } });

export const SwipeableItemStyles = theme =>
  StyleSheet.create({ 'Swipeable Item': { overflow: 'hidden' } });

export const CheckboxRowStyles = theme =>
  StyleSheet.create({ 'Checkbox Row': { minHeight: 50 } });

export const BottomSheetStyles = theme =>
  StyleSheet.create({
    'Bottom Sheet': {
      paddingBottom: 10,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 10,
    },
  });

export const TextInputStyles = theme =>
  StyleSheet.create({
    'Text Area': {
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 8,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const CircleStyles = theme =>
  StyleSheet.create({
    Circle: {
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
    },
  });

export const LinearGradientStyles = theme =>
  StyleSheet.create({ 'Linear Gradient': { flex: 1 } });

export const SliderStyles = theme =>
  StyleSheet.create({ Slider: { marginLeft: 12, marginRight: 12 } });

export const ActionSheetItemStyles = theme =>
  StyleSheet.create({ 'Action Sheet Item': { textAlign: 'center' } });

export const MapViewStyles = theme =>
  StyleSheet.create({ 'Map View': { flex: 1, height: '100%', width: '100%' } });

export const LinkStyles = theme =>
  StyleSheet.create({ Link: { color: theme.colors.primary } });

export const SVGStyles = theme =>
  StyleSheet.create({ SVG: { height: 100, width: 100 } });

export const FetchStyles = theme =>
  StyleSheet.create({ Fetch: { minHeight: 40 } });

export const AccordionGroupStyles = theme =>
  StyleSheet.create({
    Accordion: {
      fontSize: 16,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
  });

export const SurfaceStyles = theme =>
  StyleSheet.create({ Surface: { minHeight: 40 } });

export const DividerStyles = theme =>
  StyleSheet.create({ Divider: { height: 1 } });

export const TabViewItemStyles = theme =>
  StyleSheet.create({ 'Tab View Item': { flex: 1 } });

export const SquareStyles = theme =>
  StyleSheet.create({
    Square: {
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
    },
  });

export const ZStackStyles = theme =>
  StyleSheet.create({ 'Z Stack': { flexDirection: 'row' } });

export const VStackStyles = theme =>
  StyleSheet.create({ 'V Stack': { flexDirection: 'column' } });
