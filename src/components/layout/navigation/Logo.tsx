import { useDarkSection } from '@/context/DarkSectionContext';

export default function Logo() {
  const { isOverDarkSection } = useDarkSection();
  const fill = isOverDarkSection ? '#FFFFFF' : '#000000';

  return (
    <svg width="49" height="49" viewBox="0 0 49 49" fill="none">
      <path
        d="M46.0957 10.7154C44.4558 9.04043 38.0224 4.04367 34.7251 2.4248C31.4873 0.837471 27.9413 0 24.4617 0C20.9822 0 17.4361 0.837471 14.1984 2.4248C10.9011 4.04017 4.46766 9.03693 2.82426 10.7154C1.03019 12.548 0 15.1375 0 17.8181V30.5202C0 33.2008 1.03019 35.7903 2.82426 37.6264C4.46415 39.3014 10.8976 44.2981 14.1984 45.9135C17.4361 47.5008 20.9822 48.3383 24.4617 48.3383C27.9413 48.3383 31.4873 47.5008 34.7251 45.9135C38.0259 44.2946 44.4593 39.2979 46.0992 37.6229C47.8933 35.7903 48.9235 33.2008 48.9235 30.5202V17.8181C48.9235 15.1375 47.8933 12.548 46.0992 10.7154H46.0957ZM5.57493 13.4065C7.03611 11.9137 13.0701 7.26388 15.8908 5.87979C18.603 4.55175 21.5639 3.84745 24.4582 3.84745C27.3526 3.84745 30.317 4.55175 33.0256 5.87979C35.8464 7.26038 41.8804 11.9102 43.3415 13.403C44.4383 14.5243 45.069 16.1326 45.069 17.8146V20.0291C45.069 21.9563 44.186 23.7714 42.6793 24.9698C35.8043 30.4221 30.8566 34.0979 29.1887 34.9809C27.8256 35.7027 26.1927 36.0847 24.4617 36.0847H24.4547C22.8324 36.0847 21.1784 35.6957 19.6752 34.9563C18.0809 34.1714 12.8879 30.1733 12.2361 29.5531C12.1941 29.5111 12.1871 29.4585 12.1906 29.42C12.1941 29.3429 12.2396 29.3078 12.2607 29.2938L15.8488 26.5817L19.9205 29.6617C21.2555 30.6709 22.8569 31.179 24.4582 31.179C26.0596 31.179 27.6609 30.6744 28.996 29.6617L36.2599 24.1674L38.8879 22.1806C39.5256 21.6971 40.0512 21.0628 40.3245 20.3094C40.8852 18.7677 40.4752 17.1068 39.3644 16.024C38.6776 15.3547 33.0642 10.9677 30.9372 9.92345C28.9084 8.92479 26.6693 8.3992 24.4582 8.3992C22.1 8.3992 19.8434 8.93531 17.9267 9.95148C15.5194 11.227 8.97385 16.2833 3.84743 20.348V17.8181C3.84743 16.1361 4.47465 14.5278 5.57142 13.4065H5.57493ZM19.041 24.1674L22.2437 21.7461C23.5507 20.758 25.3728 20.7615 26.6763 21.7461L29.879 24.1674L26.6728 26.5887C25.3623 27.5803 23.5507 27.5803 22.2402 26.5887L19.0375 24.1674H19.041ZM43.345 34.9318C41.8838 36.4245 35.8534 41.0744 33.0291 42.455C30.317 43.783 27.3526 44.4874 24.4617 44.4874C21.5709 44.4874 18.6065 43.783 15.8943 42.455C13.0736 41.0709 7.03962 36.421 5.57843 34.9318C4.48167 33.8105 3.85445 32.2022 3.85445 30.5202V28.3057C3.85445 26.382 4.73745 24.5634 6.24419 23.365C13.1156 17.9162 18.0633 14.2369 19.7348 13.3539C22.3768 11.9523 26.1402 11.8542 29.2447 13.3785C30.8426 14.1634 36.0321 18.1615 36.6838 18.7852C36.7259 18.8272 36.7329 18.8798 36.7294 18.9148C36.7259 18.9954 36.6768 19.0305 36.6593 19.041L33.0712 21.7531L28.996 18.6731C26.3119 16.6442 22.6046 16.6442 19.9205 18.6731L12.6566 24.1639L10.0321 26.1472C9.39433 26.6307 8.86522 27.265 8.5919 28.0183C8.02775 29.5636 8.43772 31.221 9.55201 32.3073C10.2388 32.9766 15.8523 37.3636 17.9757 38.4078C20.0046 39.4065 22.2437 39.9321 24.4512 39.9321H24.4617C26.8165 39.9321 29.0731 39.396 30.9863 38.3798C33.39 37.1043 39.9356 32.0515 45.0655 27.9833V30.5132C45.0655 32.1952 44.4348 33.8035 43.338 34.9248L43.345 34.9318Z"
        fill={fill}
        className='logo'
      />
    </svg>
  );
}