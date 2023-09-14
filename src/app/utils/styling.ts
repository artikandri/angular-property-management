

export function getButtonClassName(type: String) : String {
    let className : String = 'rounded-full px-4 py-2 ';
    switch(type) {
        case 'primary':
        className += ' bg-blue-500 text-white hover:bg-blue-600 border-solid border-2 border-blue-500';
        break;
        case 'success':
        className += ' bg-green-500 text-white hover:bg-green-600 border-solid border-2 border-green-500';
        break;
        case 'disabled':
        className += ' bg-gray-300 text-gray-700 hover:bg-gray-400 border-solid border-2 border-gray-300';
        break;
        default: 
        className += 'bg-white text-gray-700 hover:bg-gray-100 border-solid border-2 border-gray-200';
        break;
    }
    return className
}