/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import Header from './components/Header';

describe('Verifica o Header', () => {
  it('Verifica se a página contém um heading h1 com o texto LOREM IPSUM', () => {
    render(<Header />);

    const headerTitle = screen.getByRole(
      'heading',
      { level: 1, name: 'LOREM IPSUM' },
    );
    expect(headerTitle).toBeInTheDocument();
  });

  it('Verifica se a página contém um subtitulo.', () => {
    render(<Header />);

    const headerP = screen.getByText(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    );
    expect(headerP).toBeInTheDocument();
  });

  it('Verifica se  a página contém uma imagem no slide', () => {
    render(<Header />);

    const headerImg = screen.getAllByRole('img');
    expect(headerImg[1]).toHaveAttribute('src', 'slide.png');
  });
});
