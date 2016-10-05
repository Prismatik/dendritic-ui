// import { mount } from 'enzyme';
// import React from 'react';
// import Input from '../../src/components/input';
//
// describe('<Radio />', () => {
//   it('must render using options from schema', () => {
//     const schema = {
//       type: 'string',
//       options: ['male', 'female']
//     };
//
//     const el = (
//       <Input
//         type="radio"
//         name="gender"
//         schema={schema}
//         label="Gender:"
//       />
//     );
//
//     const rendered = (
//       <div>
//         <label for="gender">"Gender:"</label>
//         <input
//           id="gender"
//           type="radio"
//           name="gender"
//           value="male"
//         />
//         <input
//           id="gender"
//           type="radio"
//           name="gender"
//           value="female"
//         />
//       </div>
//     );
//
//     mount(el).get(1).must.be.jsx(rendered);
//   });
//
//   it('must render an error message if no schema is passed', () => {
//   });
//
//   it('must expose a getter method', () => {
//   });
//
//   it('must expose a setter method', () => {
//   });
// });
