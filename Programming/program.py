# Function to count frequencies of distinct integers
def count_frequencies(arr):
    
    """
    Counts the frequencies of distinct integers in an array.

    Args:
        arr (list of int): une liste d'entiers.

    Returns:
        dict: A dictionary where keys are distinct integers from the array
              and values are their corresponding frequencies.
    """

    frequency_dict = {}
    for num in arr:
        if num in frequency_dict:
            frequency_dict[num] += 1
        else:
            frequency_dict[num] = 1
    return frequency_dict

# Main function
def main():
    """
    Main function to interact with the user for input, process the array of
    integers, and display the frequencies of distinct integers.

    The function prompts the user to enter the number of integers for the array,
    collects the array elements, calculates the frequencies of each distinct integer
    using the count_frequencies function, and prints the results. Handles invalid
    inputs by catching ValueError exceptions.
    """

    try:
        # Taking input from the user for the size of the array
        n = int(input("Enter the number of integers in the array: "))
        
        # Taking input for array elements
        arr = []
        for i in range(n):
            element = int(input(f"Enter element {i+1}: "))
            arr.append(element)
        
        # Counting frequencies of distinct integers
        frequencies = count_frequencies(arr)
        
        # Printing distinct integers and their corresponding frequencies
        print("\nDistinct integers and their frequencies:")
        for num, freq in frequencies.items():
            print(f"Number: {num}, Frequency: {freq}")
    
    except ValueError:
        print("Invalid input! Please enter valid integers.")

if __name__ == "__main__":
    main()