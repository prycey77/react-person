import React from 'react';
import { shallow } from 'enzyme';
import PersonList from './PersonList';

describe('PersonList', () => {
    it('renders a ul element', () => {
        const personListWrapper = shallow(<PersonList />);
        const peopleListUls = personListWrapper.find('ul');
        expect(peopleListUls).toHaveLength(1);
    })

    it('renders no li elements when no people exist',() => {
        const people = [];
        const personListWrapper = shallow(<PersonList people={people} />);      
        const peopleListItems = personListWrapper.find('li');

        expect(peopleListItems).toHaveLength(0);
    })
    it('renders list element when 1 person in list' , () => {
        const people = [{firstName: 'Alan', lastName: 'Turing'}];
        const personListWrapper = shallow(<PersonList people={people} />);      
        const peopleListItems = personListWrapper.find('li');

        expect(peopleListItems).toHaveLength(1); 
    })
    it('renders multipul li elements in person list' , () => {
        const people = [
            {firstName: 'Gary', lastName: 'TheFish'},
            {firstName: 'Patrick', lastName: 'TheClam'}];
        const personListWrapper = shallow(<PersonList people={people} />);      
        const peopleListItems = personListWrapper.find('li');

        expect(peopleListItems).toHaveLength(2); 
    })

})