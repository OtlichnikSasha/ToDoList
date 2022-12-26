import * as React from 'react';
import clsx from 'clsx';
import { styled } from '@mui/system';
import { useSwitch, UseSwitchParameters } from '@mui/base/SwitchUnstyled';

const SwitchRoot = styled('span')`
  display: inline-block;
  position: relative;
  width: 51px;
  height: 30px;
  padding: 3px;
`;

const SwitchInput = styled('input')`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 1;
  margin: 0;
  cursor: pointer;
`;

const SwitchThumb = styled('span')`
  position: absolute;
  display: block;
  background-color: #F4F4F4;
  width: 25px;
  height: 23px;
  border-radius: 20px;
  top: 3px;
  left: 0;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;utf8,
    <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
  '#222',
)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')
      center center no-repeat;
  }

  &.focusVisible {
    background-color: #79b;
  }

  &.checked {
    transform: translateX(24px);
  

    &::before {
      background-image: url('data:image/svg+xml;utf8,
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.8976 13.2468L6.61086 7.95169L1.32411 13.2468L0.143738 12.0664L5.4388 6.77962L0.143738 1.49287L1.32411 0.3125L6.61086 5.60756L11.8976 0.320813L13.0697 1.49287L7.78293 6.77962L13.0697 12.0664L11.8976 13.2468Z" fill="#A9A9A9"/>
      </svg>
  ');
    }
  }
`;

const SwitchTrack = styled('span')
`
  background-color: #366EFF;
  width: 100%;
  height: 100%;
  display: block;
  box-shadow: inset 0 0 10px 3px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  &.checked {
    background: #10C200;
  }
`
;

function MUISwitch(props: UseSwitchParameters) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  const stateClasses = {
    checked,
    disabled,
    focusVisible,
  };

  return (
    <SwitchRoot className={clsx(stateClasses)}>
      <SwitchTrack>
        <SwitchThumb className={clsx(stateClasses)} />
      </SwitchTrack>
      <SwitchInput {...getInputProps()} aria-label="Demo switch" />
    </SwitchRoot>
  );
}

export default function UseSwitchesCustom() {
  return <MUISwitch defaultChecked />;
}