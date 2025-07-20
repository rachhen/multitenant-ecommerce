export const useDropdownPosition = (
  ref: React.RefObject<HTMLDivElement | null>
) => {
  const getDropdownPosition = () => {
    if (!ref.current) {
      return { left: 0, top: 0 };
    }

    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240;

    // calculate the initial position
    let left = rect.left + window.scrollX;
    const top = rect.bottom + window.scrollY;

    // check if the dropdown will overflow on the right
    if (left + dropdownWidth > window.innerWidth) {
      // Align to right edge of button instead
      left = rect.right + window.scrollX - dropdownWidth;

      // If still off-screen, align to the right edge of the viewport with some padding
      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16;
      }
    }

    // Ensure the dropdown doesn't go off left edge
    if (left < 0) {
      left = 16;
    }

    return { left, top };
  };

  return { getDropdownPosition };
};
