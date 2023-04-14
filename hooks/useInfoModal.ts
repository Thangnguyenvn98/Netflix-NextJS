import {create} from 'zustand'


export interface ModalInterface{
    movieId?: string;
    isOpen: boolean;
    openModal: (movieId : string) => void;
    closeModal: () => void
}

const useInfoModal = create<ModalInterface>((set)=>({
    movieId: undefined,
    isOpen:false,
    openModal: (movideId: string) => set({isOpen: true, movieId: movideId}),
    closeModal: () => set({isOpen:false,movieId: undefined})
}))

export default useInfoModal