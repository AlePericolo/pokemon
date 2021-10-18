import { CgPokemon } from 'react-icons/cg';

export const Loader = (props) => {
    return (
        <div className="loader">
            <CgPokemon size={props.size || 50} className="spinner" />
        </div>
    )
}

export default Loader;