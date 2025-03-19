import logoimg from '../assets/images/sanjeevanilogo.svg';

export default function Logo() {
    return (
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 animate-pulse">
                <img
                    src={logoimg}
                    alt="Logo"
                    className="w-10 h-auto" // Adjusted to fit content width
                />
            </div>
            <div className="flex flex-col w-auto">
                <div className="text-sm text-green font-semibold text-center underline">Test A. Name Doctor's{/*Vaidyar M. Vishnu Patteri's*/}</div>
                <div className="text-xl font-bold font-bauhaus text-red-500 -mt-2">HIGHERARC{/*SANJEEVANI*/} GROUP</div>
                <div className="text-xs text-center -mt-2">ESTD 1979</div>
            </div>
        </div>
    );
}
