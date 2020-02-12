import React from 'react'
import { shallow } from 'enzyme'

import TableTrim from './index'
import { TableTrimHeader } from './TableTrimHeader'
import { TableTrimBody } from './TableTrimBody'
import testData from './fixtures/data'

describe('TableTrim', () => {
  const minProps = {
    data: testData,
    stickyCol: 0,
    activeCol: 1
  }
  
  /**
   * Sanity Check
   */
  it('component should render', () => {
    const wrapper = shallow(<TableTrim { ...minProps } />);
    expect(wrapper.exists('.tt-table')).toEqual(true);
  }); 

  it('should render TableTrimHeader', () => {
    const wrapper = shallow(<TableTrim { ...minProps } />);
    expect(wrapper.exists(TableTrimHeader)).toEqual(true);
  });

  it('should render TableTrimBody', () => {
    const wrapper = shallow(<TableTrim { ...minProps } />);
    expect(wrapper.exists(TableTrimBody)).toEqual(true);
  });

});
