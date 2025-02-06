import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  backgroundColor: '#FFFFFF',
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const tag = style({
  borderRadius: '16px',
  backgroundColor: '#FFFFFFF0',
  display: 'flex',
  alignItems: 'center',
  color: '#030306E0',
  width: 'max-content',
  height: '32px',
  padding: '8px 12px',
  gap: '4px',
  margin: '24px 0',
});

const cornerImg = style({
  zIndex: -1,
  position: 'absolute',
  right: '-1rem',
  bottom: '-1rem',
});

const containerBox = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '12px',
  backgroundColor: '#FFFFFF',
  borderRadius: '16px 16px 0 0',
});

const box = style({
  padding: '12px 16px',
  display: 'flex',
  gap: '12px',
  borderRadius: '16px',
  backgroundColor: '#F2F3F5',
});

const calendar = style({});
globalStyle(`${calendar} > svg`, {
  width: '16px',
  height: '16px',
});

const row = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem 0',
});

const switcher = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  padding: '2px',
  borderRadius: '20px',
  position: 'relative',
  backgroundColor: '#1E2B4414',
});

const btnSwitch = recipe({
  base: {
    height: '50px',
    border: '.5px solid #1E2B4414',
    backgroundColor: '#FFFFFF',
    borderRadius: '20px',
    padding: '8px',
    outline: 'none',
    color: '#030306E0',
    boxShadow: '0px 0px 1px 0px #0000000A',
    transition: 'all 0.3s ease-in-out',
  },
  variants: {
    nonactive: {
      true: {
        backgroundColor: 'transparent',
        border: '.5px solid transparent',
        boxShadow: 'none',
        ':hover': {
          boxShadow: ' 0px 12px 16px 0px #0000000A',
        },
      },
    },
  },
});

const chip = style({
  background: 'linear-gradient(132.95deg, #FF5494 2.58%, #D46DFA 50%, #3193FC 97.42%)',
  width: '39px',
  height: '18px',
  borderRadius: '10px',
  position: 'absolute',
  top: '-9px',
  display: 'flex',
  alignItems: 'center',
  color: '#FFFFFF',
  justifyContent: 'center',
  right: '16px',
});

export const appSt = {
  bottomBtn,
  container,
  tag,
  cornerImg,
  containerBox,
  box,
  calendar,
  row,
  switcher,
  btnSwitch,
  chip,
};
