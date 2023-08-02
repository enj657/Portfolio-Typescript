'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ChromePicker, ColorResult } from 'react-color';

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
  const [primaryDisplayColorPicker, setPrimaryDisplayColorPicker] = useState(
    false
  );
  const [secondaryDisplayColorPicker, setSecondaryDisplayColorPicker] = useState(
    false
  );

  const primaryColorPickerRef = useRef<HTMLDivElement>(null);
  const secondaryColorPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        primaryColorPickerRef.current &&
        !primaryColorPickerRef.current.contains(event.target as Node)
      ) {
        setPrimaryDisplayColorPicker(false);
      }
      if (
        secondaryColorPickerRef.current &&
        !secondaryColorPickerRef.current.contains(event.target as Node)
      ) {
        setSecondaryDisplayColorPicker(false);
      }
    };

    const handleWindowClick = (event: MouseEvent) => {
      if (
        !primaryColorPickerRef.current?.contains(event.target as Node) &&
        !secondaryColorPickerRef.current?.contains(event.target as Node)
      ) {
        setPrimaryDisplayColorPicker(false);
        setSecondaryDisplayColorPicker(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('click', handleWindowClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  const handlePrimaryClick = () => {
    setPrimaryDisplayColorPicker(!primaryDisplayColorPicker);
    setSecondaryDisplayColorPicker(false);
  };

  const handleSecondaryClick = () => {
    setSecondaryDisplayColorPicker(!secondaryDisplayColorPicker);
    setPrimaryDisplayColorPicker(false);
  };

  const handleClose = () => {
    setPrimaryDisplayColorPicker(false);
    setSecondaryDisplayColorPicker(false);
  };

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
      <div className='flex flex-row justify-center gap-6 align-middle md:justify-start'>
        <div className='relative justify-center py-6 align-middle md:pl-0'>
          <div
            ref={primaryColorPickerRef}
            style={{
              position: 'relative', // Add relative positioning
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
          {primaryDisplayColorPicker && (
            <div
              className='z-2 absolute'
              style={{
                position: 'absolute', // Add absolute positioning
                transform: 'translate(-25%,-100%)',
                WebkitTransform: 'translate(-25%,-100%)',
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
              <ChromePicker color={primaryPickerColor} onChange={handleChange} />
            </div>
          )}
        </div>

        <div className='relative justify-center py-6 align-middle'>
          <div
            ref={secondaryColorPickerRef}
            style={{
              position: 'relative', // Add relative positioning
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
          {secondaryDisplayColorPicker && (
            <div
              className='z-2 absolute'
              style={{
                position: 'absolute', // Add absolute positioning
                transform: 'translate(-25%,-100%)',
                WebkitTransform: 'translate(-25%,-100%)',
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
              <ChromePicker
                color={secondaryPickerColor}
                onChange={handleSecondChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
