import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from './modal';
import { vi } from 'vitest';

describe('modal', () => {
  it('onClose func when clicking the close btn', () => {
    const onClose = vi.fn();
    render(<Modal onClose={onClose}>modal</Modal>);
    fireEvent.click(screen.getByText('X'));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
