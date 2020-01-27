import React from 'react';
import { shallow } from 'enzyme';

import TableTrimBody from './TableTrimBody'
import testData from './data'

describe('TableTrimBody', () => {
  const minProps = {
    // Props
    rows: testData.body.rows,
    isTrimmed: false, 
    stickyCol: 0, 
    activeCol: 1,
    prevIndex: 3,
    nextIndex: 2,
    // Events
    setActiveCol: jest.fn()
  }

  /**
   * Sanity check
   */
  it('component should render', () => {
    const wrapper = shallow(<TableTrimBody { ...minProps } />);
    expect(wrapper.exists('.tt-body')).toEqual(true);
  }); 


  /**
   * Test cell rendering
   */
  it('should render all columns when not trimmed', () => {
    const wrapper = shallow(<TableTrimBody { ...minProps } />);
    expect(wrapper.find('.tt-tr').first().children().length).toEqual(4);
  }); 

  it('should only render two columns when trimmed', () => {
    const props = { ...minProps, isTrimmed: true }
    const wrapper = shallow(<TableTrimBody { ...props } />);
    expect(wrapper.find('.tt-tr').first().children().length).toEqual(2);
  });

  it('should always render the sticky column first when trimmed', () => {
    const props = { ...minProps, isTrimmed: true, stickyCol: 2 }
    const wrapper = shallow(<TableTrimBody { ...props } />);
    const row = wrapper.find('.tt-tr').first();
    const firstCell = row.children().first();
    expect(firstCell.hasClass('tt-sticky')).toEqual(true);
  });

  it('should render the proper columns when trimmed (default cols)', () => {
    const props = { ...minProps, isTrimmed: true }
    const wrapper = shallow(<TableTrimBody { ...props } />);
    let row = wrapper.find('.tt-tr').first();
    expect(row.children().at(0).text()).toEqual('Col 1');
    expect(row.children().at(1).text()).toEqual('Col 2');
  });

  it('should render the proper columns when trimmed (custom cols)', () => {
    const props = { ...minProps, isTrimmed: true, stickyCol: 2, activeCol: 0 }
    const wrapper = shallow(<TableTrimBody { ...props } />);
    let row = wrapper.find('.tt-tr').first();
    expect(row.children().at(0).text()).toEqual('Col 3');
    expect(row.children().at(1).text()).toEqual('Col 1');
  });

  it('should render all rows when not trimmed', () => {
    const wrapper = shallow(<TableTrimBody { ...minProps } />);
    expect(wrapper.find('.tt-tr').length).toEqual(3);
  }); 

  it('should render all rows when trimmed', () => {
    const props = { ...minProps, isTrimmed: true }
    const wrapper = shallow(<TableTrimBody { ...props } />);
    expect(wrapper.find('.tt-tr').length).toEqual(3);
  }); 

});