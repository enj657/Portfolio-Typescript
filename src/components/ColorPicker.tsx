'use client';

// ColorPicker.tsx
import React, { useState, useEffect, useRef } from 'react';
import { HexColorPicker } from 'react-colorful';

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

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handlePrimaryClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setPrimaryDisplayColorPicker(!primaryDisplayColorPicker);
    setSecondaryDisplayColorPicker(false);
  };

  const handleSecondaryClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setSecondaryDisplayColorPicker(!secondaryDisplayColorPicker);
    setPrimaryDisplayColorPicker(false);
  };

  const handleClose = () => {
    setPrimaryDisplayColorPicker(false);
    setSecondaryDisplayColorPicker(false);
  };

  const handleChange = (color: string) => {
    setPrimaryPickerColor(color);
  };

  const handleSecondChange = (color: string) => {
    setSecondaryPickerColor(color);
  };

  return (
    <div className='order-4 mt-8 flex flex-col text-center md:mb-8 md:mt-10 md:text-left lg:order-3'>
      <h3>Change the colors!</h3>
      <div className='flex flex-row justify-center gap-6 align-middle md:justify-start '>
        <div
          className='relative justify-center py-6 align-middle md:pl-0'
          ref={primaryColorPickerRef}
        >
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
          {primaryDisplayColorPicker && (
            <div
              className='z-2 absolute'
              style={{
                transform: 'translate(-30%,-100%)',
                WebkitTransform: 'translate(-30%,-100%)',
                top: 0,
                left: 0,
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
              <div onClick={(e) => e.stopPropagation()}>
                {' '}
                {/* Use stopPropagation here */}
                <HexColorPicker
                  color={primaryPickerColor}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
        </div>

        <div
          className='relative justify-center py-6 align-middle'
          ref={secondaryColorPickerRef}
        >
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
          {secondaryDisplayColorPicker && (
            <div
              className='z-2 absolute'
              style={{
                transform: 'translate(-33%,-100%)',
                WebkitTransform: 'translate(-33%,-100%)',
                top: 0,
                left: 0,
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
              <div onClick={(e) => e.stopPropagation()}>
                {' '}
                {/* Use stopPropagation here */}
                <HexColorPicker
                  color={secondaryPickerColor}
                  onChange={handleSecondChange}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
