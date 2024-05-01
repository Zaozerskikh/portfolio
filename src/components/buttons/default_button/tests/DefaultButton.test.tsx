import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import DefaultButton from '../DefaultButton';
import {DefaultButtonColor} from "../DefaultButtonColor";
import {Provider} from 'react-redux';
import reduxStore from "../../../../redux/ReduxStore";
import {setDarkTheme, setWhiteTheme} from "../../../../redux/ColorThemeReducer";
import {act} from "react-dom/test-utils";

const testButtonColor = (
  assignedColor: DefaultButtonColor,
  expectedDefaultColor: string,
  expectedColorOnHover: string,
  expectedColorOnClick: string
) => {
  const { getByTestId } = render(
    <Provider store={reduxStore}>
      <DefaultButton
        onClickAction={() => true}
        color={assignedColor}
      />
    </Provider>
  )
  const button = getByTestId('default-btn')

  expect(button).toBeInTheDocument();
  expect(button).toHaveStyleRule('background-color', `${expectedDefaultColor}`);

  fireEvent.mouseEnter(button);
  expect(button).toHaveStyleRule('background-color', `${expectedColorOnHover}`);

  fireEvent.mouseDown(button);
  expect(button).toHaveStyleRule('background-color', `${expectedColorOnClick}`);

  fireEvent.touchStart(button)
  expect(button).toHaveStyleRule('background-color', `${expectedColorOnClick}`);

  fireEvent.mouseLeave(button)
  expect(button).toHaveStyleRule('background-color', `${expectedDefaultColor}`);
}

describe('DefaultButton', () => {
  it('colors: white', () => {
    testButtonColor(
      DefaultButtonColor.WHITE,
      'var(--buttons-white-default, #FFF)',
      'var(--buttons-white-on-hover, #F4F4F4)',
      'var(--buttons-white-on-click, #CBCBCB)'
    )
  });

  it('colors: yellow', () => {
    testButtonColor(
      DefaultButtonColor.YELLOW,
      'var(--buttons-yellow-default, #FFFB90)',
      'var(--buttons-yellow-on-hover, #FFF94D)',
      'var(--buttons-yellow-on-click, #F1EC49)'
    )
  });

  it('colors: mint', () => {
    testButtonColor(
      DefaultButtonColor.MINT,
      'var(--buttons-mint-default, #B1FFE3)',
      'var(--buttons-mint-on-hover, #82FFD2)',
      'var(--buttons-mint-on-click, #5CFFC5)'
    )
  });

  it('colors: violet', () => {
    testButtonColor(
      DefaultButtonColor.VIOLET,
      'var(--buttons-violet-default, #EEC9FF)',
      'var(--buttons-violet-on-hover, #D886FF)',
      'var(--buttons-violet-on-click, #C176E5)'
    )
  });

  it('colors: orange', () => {
    testButtonColor(
      DefaultButtonColor.ORANGE,
      'var(--buttons-orange-default, #FFB178)',
      'var(--buttons-orange-on-hover, #FF9E57)',
      'var(--buttons-orange-on-click, #FE8C39)'
    )
  });

  it('colors: orange', () => {
    testButtonColor(
      DefaultButtonColor.BLUE,
      'var(--buttons-blue-default, #81C7F8)',
      'var(--buttons-blue-on-hover, #55B5F9)',
      'var(--buttons-blue-on-click, #47A2E2)'
    )
  });

  it('colors: orange', () => {
    testButtonColor(
      DefaultButtonColor.BLUE,
      'var(--buttons-blue-default, #81C7F8)',
      'var(--buttons-blue-on-hover, #55B5F9)',
      'var(--buttons-blue-on-click, #47A2E2)'
    )
  });

  it('colors: orange', () => {
    testButtonColor(
      DefaultButtonColor.GRAY,
      'var(--buttons-gray-default, #EFEFEF)',
      'var(--buttons-gray-on-hover, #DEDEDE)',
      'var(--buttons-gray-on-click, #CBCBCB)'
    )
  });

  it('styles: common', () => {
    const { getByTestId } = render(
      <Provider store={reduxStore}>
        <DefaultButton
          onClickAction={() => true}
          color={DefaultButtonColor.WHITE}
        />
      </Provider>
    )
    const button = getByTestId('default-btn')

    expect(button).toHaveStyleRule('display', 'flex');
    expect(button).toHaveStyleRule('width', '100%');
    expect(button).toHaveStyleRule('height', '50px');
    expect(button).toHaveStyleRule('justify-content', 'center');
    expect(button).toHaveStyleRule('align-items', 'center');
    expect(button).toHaveStyleRule('flex-shrink', '0');
    expect(button).toHaveStyleRule('border-radius', '4px');
    expect(button).toHaveStyleRule('box-sizing', 'border-box');
    expect(button).toHaveStyleRule('margin', '0');
    expect(button).toHaveStyleRule('transition', '0.2s ease-in-out');
  });

  it('styles: active', () => {
    const { getByTestId } = render(
      <Provider store={reduxStore}>
        <DefaultButton
          onClickAction={() => true}
          color={DefaultButtonColor.WHITE}
        />
      </Provider>
    )
    act(() => {
      reduxStore.dispatch(setWhiteTheme())
    });

    const button = getByTestId('default-btn')
    expect(button).toBeInTheDocument();

    fireEvent.mouseEnter(button);
    expect(button).toHaveStyleRule('border', '1px solid #000');
    expect(button).toHaveStyleRule('box-shadow', '4px 4px 0 0 #000');
    expect(button).toHaveStyleRule('transform', 'translate(-4px, -4px)');

    fireEvent.mouseDown(button);
    expect(button).toHaveStyleRule('border', '1px solid #000');
    expect(button).toHaveStyleRule('box-shadow', '2px 2px 0 0 #000');
    expect(button).toHaveStyleRule('transform', 'translate(-2px, -2px)');

    fireEvent.touchStart(button);
    expect(button).toHaveStyleRule('border', '1px solid #000');
    expect(button).toHaveStyleRule('box-shadow', '2px 2px 0 0 #000');
    expect(button).toHaveStyleRule('transform', 'translate(-2px, -2px)');

    fireEvent.mouseLeave(button)
    act(() => {
      reduxStore.dispatch(setDarkTheme())
    });

    fireEvent.mouseEnter(button);
    expect(button).toHaveStyleRule('border', '1px solid #000');
    expect(button).toHaveStyleRule('box-shadow', '4px 4px 0 0 var(--buttons-gray-default)');
    expect(button).toHaveStyleRule('transform', 'translate(-4px, -4px)');

    fireEvent.mouseDown(button);
    expect(button).toHaveStyleRule('border', '1px solid #000');
    expect(button).toHaveStyleRule('box-shadow', '2px 2px 0 0 var(--buttons-gray-default)');
    expect(button).toHaveStyleRule('transform', 'translate(-2px, -2px)');

    fireEvent.touchStart(button);
    expect(button).toHaveStyleRule('border', '1px solid #000');
    expect(button).toHaveStyleRule('box-shadow', '2px 2px 0 0 var(--buttons-gray-default)');
    expect(button).toHaveStyleRule('transform', 'translate(-2px, -2px)');
  });

  it('text', () => {
    const {getByText} = render(
      <Provider store={reduxStore}>
        <DefaultButton
          text={'btn text'}
          onClickAction={() => true}
          color={DefaultButtonColor.WHITE}
        />
      </Provider>
    )

    const button = getByText('btn text')
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('mobile-button-text');
  });
});
