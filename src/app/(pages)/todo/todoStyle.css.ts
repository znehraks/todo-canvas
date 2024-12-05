import { vars } from '@/theme.css';
import { style } from '@vanilla-extract/css';

export const todoWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  background: vars.colors.secondary,
  color: vars.colors.primary,
  padding: '20px',
});
