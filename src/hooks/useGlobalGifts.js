import { useContext } from 'react';
import GiftsContext from 'context/GiftsContext';

export default function useGlobalGifts() {
  return useContext(GiftsContext).gifts;
}
