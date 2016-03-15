const {describe, it} = global;
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NodeList from '../NodeList.jsx';

describe('nodes.components.nodeList', () => {
  it('should display the text', () => {
    const el = shallow(<NodeList />);
    expect(el.find('p').text()).to.be.match(/This is where the items will be./);
  });
});
