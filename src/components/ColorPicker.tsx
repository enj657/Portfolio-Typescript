'use client';
import React, { useState } from 'react';
import { SketchPicker, ColorResult } from 'react-color';

interface ColorPickerProps {
  primaryPickerColor: string;
  setPrimaryPickerColor: (color: string) => void;
  secondaryPickerColor: string;
  setSecondaryPickerColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  primaryPickerColor,
  setPrimaryPickerColor,
  secondaryPickerColor,
  setSecondaryPickerColor,
}) => {
  const [primaryDisplayColorPicker, setPrimaryDisplayColorPicker] =
    useState(false);
  const [secondaryDisplayColorPicker, setSecondaryDisplayColorPicker] =
    useState(false);

  const handlePrimaryClick = () => {
    setPrimaryDisplayColorPicker(!primaryDisplayColorPicker);
  };

  const handleSecondaryClick = () => {
    setSecondaryDisplayColorPicker(!secondaryDisplayColorPicker);
  };

  const handleClose = () => {
    setPrimaryDisplayColorPicker(false);
    setSecondaryDisplayColorPicker(false);
  };

  // Helper function to convert ColorResult to hex string
  const colorResultToHex = (colorResult: ColorResult): string => {
    const { r, g, b } = colorResult.rgb;
    return `#${[r, g, b].map((x) => x.toString(16).padStart(2, '0')).join('')}`;
  };

  const handleChange = (colorResult: ColorResult) => {
    const hexColor = colorResultToHex(colorResult);
    setPrimaryPickerColor(hexColor);
  };

  const handleSecondChange = (colorResult: ColorResult) => {
    const hexColor = colorResultToHex(colorResult);
    setSecondaryPickerColor(hexColor);
  };

  return (
    <div className='order-4 mt-8 md:mt-10 flex flex-col text-center md:mb-8 md:text-left lg:order-3'>
      <h3>Change the colors!</h3>
      <div className='flex flex-row justify-center gap-6 align-middle md:justify-start '>
        <div className='relative justify-center py-6 align-middle md:pl-0'>
          <div
            style={{
              padding: '2px',
              background: '#fff',
              borderRadius: '1px',
              boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
              display: 'inline-block',
              cursor: 'pointer',
            }}
            onClick={handlePrimaryClick}
          >
            <div
              style={{
                width: '60px',
                height: '18px',
                borderRadius: '2px',
                background: primaryPickerColor,
              }}
            />
          </div>
          {primaryDisplayColorPicker ? (
            <div
              className='z-2 absolute'
              style={{
                transform: 'translate(0%,-100%)',
                WebkitTransform: 'translate(0%,-100%)',
                left: '0%',
                top: '0%',
              }}
            >
              <div
                style={{
                  position: 'fixed',
                  top: '0px',
                  right: '0px',
                  bottom: '0px',
                  left: '0px',
                }}
                onClick={handleClose}
              />
              <SketchPicker
                color={primaryPickerColor}
                onChange={handleChange}
              />
            </div>
          ) : null}
        </div>

        <div className='relative justify-center py-6 align-middle'>
          <div
            style={{
              padding: '2px',
              background: '#fff',
              borderRadius: '1px',
              boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
              display: 'inline-block',
              cursor: 'pointer',
            }}
            onClick={handleSecondaryClick}
          >
            <div
              style={{
                width: '60px',
                height: '18px',
                borderRadius: '2px',
                background: secondaryPickerColor,
              }}
            />
          </div>
          {secondaryDisplayColorPicker ? (
            <div
              className='z-2 absolute'
              style={{
                transform: 'translate(0%,-100%)',
                WebkitTransform: 'translate(0%,-100%)',
                left: '0%',
                top: '0%',
              }}
            >
              <div
                style={{
                  position: 'fixed',
                  top: '0px',
                  right: '0px',
                  bottom: '0px',
                  left: '0px',
                }}
                onClick={handleClose}
              />
              <SketchPicker
                color={secondaryPickerColor}
                onChange={handleSecondChange}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
