// import React from 'react'
import {Heading,headingProp} from './Heading'     
import {Meta,Story} from '@storybook/react'

export default{
    component:Heading,
    title:'Heading',
    argTypes:{
          type:{type:'primary'}
    }
}as Meta;
const Template:Story<headingProp> = (args)=><Heading {...args}/>

export const Primary = Template.bind({});
Primary.args={
    type:"primary",
    children:"First Story Component",
}
// export const Primary = ()=>{ return (<Heading type="primary">Heading component</Heading>)};  #easier way but not responsive with realtime changes

export const Secondary = Template.bind({});
Secondary.args={
    children:"Type secondary in type to change color in background"
}
//export const Secondary = ()=>{ return  <Heading type="secondary">Heading component</Heading>};
export const Danger = Template.bind({});
Danger.args={
    type:"danger",
    children:"Danger Type",
}
//export const Danger = ()=>{  return <Heading type="danger">Heading component</Heading>};
export const Warning = Template.bind({});
Warning.args={
    type:"warning",
    children:"Warning Type"
}
//export const Success = ()=>{ return  <Heading type="success">Heading component</Heading>};
export const Success = Template.bind({});
Success.args={
    type:"success",
    children:"success component"
}
//export const Warning = ()=>{  return <Heading type="warning">Heading component</Heading>};

export const Big = Template.bind({})
Big.args={
    type:"success",
    children:"big,medium,small are the sizes of font",
    size:"big"
}


