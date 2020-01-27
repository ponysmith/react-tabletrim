import React from 'react';
import { shallow } from 'enzyme';

import TableTrimHeader from './TableTrimHeader'
import testData from './data'

describe('TableTrimHeader', () => {
  const minProps = {
    // Props
    cells: testData.header.cells,
    isTrimmed: false, 
    stickyCol: 0, 
    activeCol: 1,
    showActiveTitle: false, 
    showNextControl: false,
    showPrevControl: false,
    showSelectControl: false,
    prevControlHtml: 'Previous',
    nextControlHtml: 'Next',
    prevIndex: 3,
    nextIndex: 2,
    // Events
    setActiveCol: jest.fn()
  }

  /**
   * Sanity check
   */
  it('component should render', () => {
    const wrapper = shallow(<TableTrimHeader { ...minProps } />);
    expect(wrapper.exists('.tt-head')).toEqual(true);
  }); 


  /**
   * Test header cell rendering
   */
  it('should render all header cells when not trimmed', () => {
    const wrapper = shallow(<TableTrimHeader { ...minProps } />);
    expect(wrapper.find('.tt-th').length).toEqual(4);
  }); 

  it('should only render two header cells when trimmed', () => {
    const props = { ...minProps, isTrimmed: true }
    const wrapper = shallow(<TableTrimHeader { ...props } />);
    expect(wrapper.find('.tt-th').length).toEqual(2);
  });

  it('should trim the correct header cells', () => {
    const props = { ...minProps, isTrimmed: true, stickyCol: 1, activeCol: 2 }
    const wrapper = shallow(<TableTrimHeader { ...props } />);
    expect(wrapper.find('.tt-th').at(0).hasClass('tt-sticky')).toEqual(true);
    expect(wrapper.find('.tt-th').at(1).hasClass('tt-active')).toEqual(true);
  }); 

  it('should always render the sticky column first when trimmed', () => {
    const props = { ...minProps, isTrimmed: true, stickyCol: 2, activeCol: 1 }
    const wrapper = shallow(<TableTrimHeader { ...props } />);
    expect(wrapper.find('.tt-th').at(0).hasClass('tt-sticky')).toEqual(true);
  });


  /**
   * Test header cell title rendering
   */
  it('should render the header titles when not trimmed', () => {
    const wrapper = shallow(<TableTrimHeader { ...minProps } />);
    expect(wrapper.find('.tt-title').length).toEqual(4);
  });

  it('should render the proper header title', () => {
    const wrapper = shallow(<TableTrimHeader { ...minProps } />);
    expect(wrapper.find('.tt-title').at(0).text()).toEqual('Col 1');
    expect(wrapper.find('.tt-title').at(1).text()).toEqual('Col 2');
  }); 

  it('should always show sticky column title when trimmed', () => {
    const props = { ...minProps, isTrimmed: true }
    const wrapper = shallow(<TableTrimHeader { ...props } />);
    expect(wrapper.find('.tt-sticky .tt-title').exists()).toEqual(true);
  });

  it('should properly handle showActiveTitle=false', () => {
    const props = { ...minProps, isTrimmed: true }
    const wrapper = shallow(<TableTrimHeader { ...props } />);
    expect(wrapper.find('.tt-active .tt-title').exists()).toEqual(false);
  });

  it('should properly handle showActiveTitle=true', () => {
    const props = { ...minProps, isTrimmed: true, showActiveTitle: true }
    const wrapper = shallow(<TableTrimHeader { ...props } />);
    expect(wrapper.find('.tt-active .tt-title').exists()).toEqual(true);
  }); 


  /**
   * Test rendering of controls
   */
  it('should not render controls when not trimmed', () => {
    const props = { ...minProps, showPrevControl: true, showNextControl: true, showSelectControl: true }
    const wrapper = shallow(<TableTrimHeader { ...props } />);
    expect(wrapper.find('.tt-prev').exists()).toEqual(false);
    expect(wrapper.find('.tt-next').exists()).toEqual(false);
    expect(wrapper.find('.tt-select').exists()).toEqual(false);
  });

  it('should not render disabled contols when trimmed', () => {
    const props = { ...minProps, isTrimmed: true }
    const wrapper = shallow(<TableTrimHeader { ...props } />);
    expect(wrapper.find('.tt-prev').exists()).toEqual(false);
    expect(wrapper.find('.tt-next').exists()).toEqual(false);
    expect(wrapper.find('.tt-select').exists()).toEqual(false);
  })

  it('should render controls if enabled when trimmed', () => {
    const props = { ...minProps, isTrimmed: true, showPrevControl: true, showNextControl: true, showSelectControl: true }
    const wrapper = shallow(<TableTrimHeader { ...props } />);
    expect(wrapper.find('.tt-prev').exists()).toEqual(true);
    expect(wrapper.find('.tt-next').exists()).toEqual(true);
    expect(wrapper.find('.tt-select').exists()).toEqual(true);
  });

  it('should use custom HTML for prev and next controls', () => {
    const props = { ...minProps, isTrimmed: true, showPrevControl: true, showNextControl: true, prevControlHtml: 'foo', nextControlHtml: 'bar' }
    const wrapper = shallow(<TableTrimHeader { ...props } />);
    expect(wrapper.find('.tt-prev').text()).toEqual('foo');
    expect(wrapper.find('.tt-next').text()).toEqual('bar');
  });

  it('should select the currently active column in the select control', () => {
    const props = { ...minProps, isTrimmed: true, activeCol: 1, showSelectControl: true }
    const wrapper = shallow(<TableTrimHeader { ...props } />);
    expect(wrapper.find('.tt-select').prop('value')).toEqual(1);
    const props2 = { ...minProps, isTrimmed: true, activeCol: 2, showSelectControl: true }
    const wrapper2 = shallow(<TableTrimHeader { ...props2 } />);
    expect(wrapper2.find('.tt-select').prop('value')).toEqual(2);
  });


  /**
   * Test events
   */
  it('should trigger event when select control changes', () => {
    const props = { ...minProps, isTrimmed: true, showSelectControl: true }
    const wrapper = shallow(<TableTrimHeader { ...props } />);
    wrapper.find('.tt-select').simulate('change', { target: { value: 2 } } );
    expect(props.setActiveCol).toHaveBeenCalledWith(2);
  });

  it('should trigger event when prev control is clicked', () => {
    const props = { ...minProps, isTrimmed: true, showPrevControl: true }
    const wrapper = shallow(<TableTrimHeader { ...props } />);
    wrapper.find('.tt-prev').simulate('click');
    expect(props.setActiveCol).toHaveBeenCalledWith(props.prevIndex);
  });

  it('should trigger event when next control is clicked', () => {
    const props = { ...minProps, isTrimmed: true, showNextControl: true }
    const wrapper = shallow(<TableTrimHeader { ...props } />);
    wrapper.find('.tt-next').simulate('click');
    expect(props.setActiveCol).toHaveBeenCalledWith(props.nextIndex);
  });

});