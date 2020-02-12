import * as v from './TableTrimValidators'
import testData from './fixtures/data'
import { errors } from './TableTrimValidators'

describe('validateActiveCol', () => {
  
  it('should handle out of range errors for activeCol', () => {
    const expected = new Error(errors.ACTIVECOL_OUT_OF_RANGE);
    let props = { data: testData, activeCol: 22 }
    expect(v.validateActiveCol(props, 'activeCol')).toEqual(expected);
    props = { data: testData, activeCol: -1 }
    expect(v.validateActiveCol(props, 'activeCol')).toEqual(expected);
  });

  it('should handle out of range errors for stickyCol', () => {
    const expected = new Error(errors.STICKYCOL_OUT_OF_RANGE);
    let props = { data: testData, stickyCol: 22 }
    expect(v.validateStickyCol(props, 'stickyCol')).toEqual(expected);
    props = { data: testData, stickyCol: -1 }
    expect(v.validateStickyCol(props, 'stickyCol')).toEqual(expected);
  });

  it('should handle duplication of activeCol and stickyCol', () => {
    const props = { data: testData, activeCol: 1, stickyCol: 1 }
    const expected = new Error(errors.ACTIVECOL_STICKYCOL_CONFLICT);
    expect(v.validateActiveCol(props, 'activeCol')).toEqual(expected);
    expect(v.validateStickyCol(props, 'activeCol')).toEqual(expected);
  });

});
