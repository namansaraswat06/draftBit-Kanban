import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GetTasksApi from '../apis/GetTasksApi.js';
import * as CustomCode from '../custom-files/CustomCode';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  ScreenContainer,
  SectionHeader,
  TabView,
  TabViewItem,
  Table,
  TableCell,
  TableRow,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const CRMScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [pickerValue, setPickerValue] = React.useState('');
  const [sliderValue, setSliderValue] = React.useState(0);
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textAreaValue, setTextAreaValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View>
        <TabView
          activeColor={theme.colors.primary}
          indicatorColor={theme.colors.primary}
          keyboardDismissMode={'auto'}
          pressColor={theme.colors.primary}
          swipeEnabled={true}
          tabBarPosition={'top'}
          tabsBackgroundColor={theme.colors.background}
        >
          <TabViewItem
            icon={'AntDesign/table'}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                {
                  alignItems: {
                    minWidth: Breakpoints.BigScreen,
                    value: 'stretch',
                  },
                  flexDirection: {
                    minWidth: Breakpoints.Laptop,
                    value: 'column',
                  },
                  justifyContent: {
                    minWidth: Breakpoints.BigScreen,
                    value: 'flex-start',
                  },
                }
              ),
              dimensions.width
            )}
            title={'Tabular View'}
          >
            <GetTasksApi.FetchGetDetailsGET>
              {({ loading, error, data, refetchGetDetails }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <>
                    <SectionHeader
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: {
                            minWidth: Breakpoints.Laptop,
                            value: 'stretch',
                          },
                        },
                        dimensions.width
                      )}
                    >
                      <Table
                        borderColor={theme.colors.divider}
                        borderStyle={'solid'}
                        borderWidth={1}
                        cellHorizontalPadding={10}
                        cellVerticalPadding={10}
                        drawTopBorder={true}
                        showsVerticalScrollIndicator={true}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TableStyles(theme)['Table'],
                            {
                              alignSelf: {
                                minWidth: Breakpoints.Laptop,
                                value: 'auto',
                              },
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        <TableRow
                          drawBottomBorder={true}
                          drawStartBorder={true}
                        >
                          <TableCell
                            drawEndBorder={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TableCellStyles(theme)[
                                  'Table Cell'
                                ],
                                {
                                  justifyContent: {
                                    minWidth: Breakpoints.Laptop,
                                    value: 'flex-start',
                                  },
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.TextStyles(theme)['Text'],
                                dimensions.width
                              )}
                            >
                              {'User ID'}
                            </Text>
                          </TableCell>
                          {/* Table Cell 2 */}
                          <TableCell
                            drawEndBorder={true}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TableCellStyles(theme)[
                                  'Table Cell'
                                ],
                                {
                                  justifyContent: {
                                    minWidth: Breakpoints.Laptop,
                                    value: 'flex-start',
                                  },
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            <Text
                              accessible={true}
                              allowFontScaling={true}
                              style={StyleSheet.applyWidth(
                                GlobalStyles.TextStyles(theme)['Text'],
                                dimensions.width
                              )}
                            >
                              {'Description'}
                            </Text>
                          </TableCell>
                        </TableRow>
                      </Table>
                    </SectionHeader>
                    <Table
                      borderStyle={'solid'}
                      borderWidth={1}
                      cellHorizontalPadding={10}
                      cellVerticalPadding={10}
                      data={fetchData}
                      drawBottomBorder={false}
                      drawTopBorder={true}
                      keyExtractor={tableData =>
                        tableData?.id ||
                        tableData?.uuid ||
                        JSON.stringify(tableData)
                      }
                      listKey={'gF1Nz7oz'}
                      renderItem={({ item, index }) => {
                        const tableData = item;
                        return (
                          <>
                            {!tableData ? null : (
                              <TableRow
                                drawBottomBorder={true}
                                drawStartBorder={true}
                              >
                                <>
                                  {!(fetchData && fetchData[0]) ? null : (
                                    <TableCell
                                      drawEndBorder={true}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TableCellStyles(theme)[
                                            'Table Cell'
                                          ],
                                          {
                                            justifyContent: {
                                              minWidth: Breakpoints.Laptop,
                                              value: 'flex-start',
                                            },
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        accessible={true}
                                        allowFontScaling={true}
                                        style={StyleSheet.applyWidth(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text'
                                          ],
                                          dimensions.width
                                        )}
                                      >
                                        {tableData?.id}
                                      </Text>
                                    </TableCell>
                                  )}
                                </>
                                {/* Table Cell 2 */}
                                <>
                                  {!(fetchData && fetchData[0]) ? null : (
                                    <TableCell
                                      drawEndBorder={true}
                                      style={StyleSheet.applyWidth(
                                        StyleSheet.compose(
                                          GlobalStyles.TableCellStyles(theme)[
                                            'Table Cell'
                                          ],
                                          {
                                            justifyContent: {
                                              minWidth: Breakpoints.Laptop,
                                              value: 'flex-start',
                                            },
                                          }
                                        ),
                                        dimensions.width
                                      )}
                                    >
                                      <Text
                                        accessible={true}
                                        allowFontScaling={true}
                                        style={StyleSheet.applyWidth(
                                          GlobalStyles.TextStyles(theme)[
                                            'Text'
                                          ],
                                          dimensions.width
                                        )}
                                      >
                                        {tableData?.title}
                                      </Text>
                                    </TableCell>
                                  )}
                                </>
                              </TableRow>
                            )}
                          </>
                        );
                      }}
                      showsVerticalScrollIndicator={true}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.TableStyles(theme)['Table'],
                          {
                            alignSelf: {
                              minWidth: Breakpoints.Laptop,
                              value: 'auto',
                            },
                            backgroundColor: {
                              minWidth: Breakpoints.Laptop,
                              value: 'rgba(0, 0, 0, 0)',
                            },
                            opacity: { minWidth: Breakpoints.Laptop, value: 1 },
                          }
                        ),
                        dimensions.width
                      )}
                    />
                  </>
                );
              }}
            </GetTasksApi.FetchGetDetailsGET>
          </TabViewItem>
          {/* Tab View Item 2 */}
          <TabViewItem
            icon={'AntDesign/creditcard'}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TabViewItemStyles(theme)['Tab View Item'],
                {
                  alignItems: [
                    { minWidth: Breakpoints.BigScreen, value: 'center' },
                    { minWidth: Breakpoints.Laptop, value: 'center' },
                  ],
                }
              ),
              dimensions.width
            )}
            title={'Card View'}
          >
            <GetTasksApi.FetchGetDetailsGET>
              {({ loading, error, data, refetchGetDetails }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <Utils.CustomCodeErrorBoundary>
                    <CustomCode.MyExampleComponent />
                  </Utils.CustomCodeErrorBoundary>
                );
              }}
            </GetTasksApi.FetchGetDetailsGET>
          </TabViewItem>
        </TabView>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(CRMScreen);
