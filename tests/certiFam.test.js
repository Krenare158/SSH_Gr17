// CertiFam.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CertiFam from './CertiFam';

test('submits form with correct data', () => {
  render(<CertiFam />);
  
  // Mbushni dropdown-in me një anëtar të familjes
  fireEvent.change(screen.getByLabelText(/Zgjedh anetarin/i), { target: { value: '1' } });

  // Përçoni formën
  fireEvent.click(screen.getByText(/Shkarko/i));

  // Kontrolloni nëse kërkesa për shkarkim është thirrur me të dhënat e duhura
  expect(console.log).toHaveBeenCalledWith("1");
});
