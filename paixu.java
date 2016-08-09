package a;

import java.util.ArrayList;
import java.util.List;

/**
 * @author Administrator http://www.cnblogs.com/liuling/p/2013-7-24-01.html
 */
public class paixu {

	/**
	 * 内排序有可以分为以下几类：
	 * 
	 * (1)、插入排序：直接插入排序、二分法插入排序、希尔排序。
	 * 
	 * (2)、选择排序：简单选择排序、堆排序。
	 * 
	 * (3)、交换排序：冒泡排序、快速排序。
	 * 
	 * (4)、归并排序
	 * 
	 * (5)、基数排序
	 */
	public static void main(String[] args) {
		int[] a = { 49, 38, 65, 97, 76, 13, 27, 49, 78, 34, 12, 64, 1, 8 };
		System.out.println("排序之前：");
		for (int i = 0; i < a.length; i++) {
			System.out.print(a[i] + " ");
		}
		// 冒泡排序
		a = new int[]{ 49, 38, 65, 97, 76, 13, 27, 49, 78, 34, 12, 64, 1, 8 };
		bubble_sort(a);
		System.out.println();
		System.out.println("冒泡排序：");
		for (int i = 0; i < a.length; i++) {
			System.out.print(a[i] + " ");
		}

		// 快速排序
		a = new int[]{ 49, 38, 65, 97, 76, 13, 27, 49, 78, 34, 12, 64, 1, 8 };
		quick_sort(a);
		System.out.println();
		System.out.println("快速排序：");
		for (int i = 0; i < a.length; i++) {
			System.out.print(a[i] + " ");
		}

		// 直接插入排序
		a = new int[]{ 49, 38, 65, 97, 76, 13, 27, 49, 78, 34, 12, 64, 1, 8 };
		insert_sort1(a);
		System.out.println();
		System.out.println("直接插入排序：");
		for (int i = 0; i < a.length; i++) {
			System.out.print(a[i] + " ");
		}

		// 二分插入排序
		a = new int[]{ 49, 38, 65, 97, 76, 13, 27, 49, 78, 34, 12, 64, 1, 8 };
		insert_sort2(a);
		System.out.println();
		System.out.println("二分插入排序：");
		for (int i = 0; i < a.length; i++) {
			System.out.print(a[i] + " ");
		}

		// 希尔排序
		a = new int[]{ 49, 38, 65, 97, 76, 13, 27, 49, 78, 34, 12, 64, 1, 8 };
		shell_sort(a);
		System.out.println();
		System.out.println("希尔排序：");
		for (int i = 0; i < a.length; i++) {
			System.out.print(a[i] + " ");
		}

		// 简单的选择排序
		a = new int[]{ 49, 38, 65, 97, 76, 13, 27, 49, 78, 34, 12, 64, 1, 8 };
		select_sort(a);
		System.out.println();
		System.out.println("简单的选择排序：");
		for (int i = 0; i < a.length; i++) {
			System.out.print(a[i] + " ");
		}

		// 堆排序
		a = new int[]{ 49, 38, 65, 97, 76, 13, 27, 49, 78, 34, 12, 64, 1, 8 };
		heap_sort(a);
		System.out.println();
		System.out.println("堆排序：");
		for (int i = 0; i < a.length; i++) {
			System.out.print(a[i] + " ");
		}

		// 归并排序
		a = new int[]{ 49, 38, 65, 97, 76, 13, 27, 49, 78, 34, 12, 64, 1, 8 };
		merge_sort(a);
		System.out.println();
		System.out.println("归并排序：");
		for (int i = 0; i < a.length; i++) {
			System.out.print(a[i] + " ");
		}

		// 基数排序
		a = new int[]{ 49, 38, 65, 97, 76, 13, 27, 49, 78, 34, 12, 64, 1, 8 };
		single_sort(a);
		System.out.println();
		System.out.println("基数排序：");
		for (int i = 0; i < a.length; i++) {
			System.out.print(a[i] + " ");
		}
	}

	/**
	 * 基数排序
	 * <p>
	 * 1、基本思想：将所有待比较数值（正整数）统一为同样的数位长度，数位较短的数前面补零。然后，从最低位开始，依次进行一次排序。
	 * 这样从最低位排序一直到最高位排序完成以后,数列就变成一个有序序列。
	 * 
	 * @see 基数排序是稳定的排序算法。 时间复杂度为O(d(n+r)),d为位数，r为基数。
	 * @param array
	 */
	@SuppressWarnings({ "unchecked", "rawtypes" })
	private static void single_sort(int[] array) {
		// 找到最大数，确定要排序几趟
		int max = 0;
		for (int i = 0; i < array.length; i++) {
			if (max < array[i]) {
				max = array[i];
			}
		}
		// 判断位数
		int times = 0;
		while (max > 0) {
			max = max / 10;
			times++;
		}
		// 建立十个队列
		List<ArrayList> queue = new ArrayList<ArrayList>();
		for (int i = 0; i < 10; i++) {
			ArrayList queue1 = new ArrayList();
			queue.add(queue1);
		}
		// 进行times次分配和收集
		for (int i = 0; i < times; i++) {
			// 分配
			for (int j = 0; j < array.length; j++) {
				int x = array[j] % (int) Math.pow(10, i + 1) / (int) Math.pow(10, i);
				ArrayList queue2 = queue.get(x);
				queue2.add(array[j]);
				queue.set(x, queue2);
			}
			// 收集
			int count = 0;
			for (int j = 0; j < 10; j++) {
				while (queue.get(j).size() > 0) {
					ArrayList<Integer> queue3 = queue.get(j);
					array[count] = queue3.get(0);
					queue3.remove(0);
					count++;
				}
			}
		}
	}

	/**
	 * 归并排序
	 * <p>
	 * 1、基本思想:归并（Merge）排序法是将两个（或两个以上）有序表合并成一个新的有序表，即把待排序序列分为若干个子序列，每个子序列是有序的。
	 * 然后再把有序子序列合并为整体有序序列。
	 * 
	 * @see 归并排序是稳定的排序方法。 时间复杂度为O(nlogn)。
	 * 
	 * @param a
	 *            int arrays
	 */
	public static void merge_sort(int[] a) {
		mergeSort(a, 0, a.length - 1);
	}

	private static void mergeSort(int[] a, int left, int right) {
		if (left < right) {
			int middle = (left + right) / 2;
			// 对左边进行递归
			mergeSort(a, left, middle);
			// 对右边进行递归
			mergeSort(a, middle + 1, right);
			// 合并
			merge(a, left, middle, right);
		}
	}

	private static void merge(int[] a, int left, int middle, int right) {
		int[] tmpArr = new int[a.length];
		int mid = middle + 1; // 右边的起始位置
		int tmp = left;
		int third = left;
		while (left <= middle && mid <= right) {
			// 从两个数组中选取较小的数放入中间数组
			if (a[left] <= a[mid]) {
				tmpArr[third++] = a[left++];
			} else {
				tmpArr[third++] = a[mid++];
			}
		}
		// 将剩余的部分放入中间数组
		while (left <= middle) {
			tmpArr[third++] = a[left++];
		}
		while (mid <= right) {
			tmpArr[third++] = a[mid++];
		}
		// 将中间数组复制回原数组
		while (tmp <= right) {
			a[tmp] = tmpArr[tmp++];
		}
	}

	/**
	 * 冒泡排序
	 * <p>
	 * 基本思想：在要排序的一组数中，对当前还未排好序的范围内的全部数，自上而下对相邻的两个数依次进行比较和调整，让较大的数往下沉，较小的往上冒。即：
	 * 每当两相邻的数比较后发现它们的排序与排序要求相反时，就将它们互换。
	 * 
	 * @see 冒泡排序是一种稳定的排序方法。
	 * @param a
	 */
	public static void bubble_sort(int[] a) {
		boolean isChanged = true; // 通过一个boolean
									// isChanged，如果一次循环中没有交换过元素，则说明已经排好序；
		for (int i = 0; i < a.length && isChanged; i++) {
			isChanged = false;
			for (int j = i + 1; j < a.length; j++) {
				if (a[i] > a[j]) {
					swap(a, i, j);
					isChanged = true;
				}
			}
		}
		// return arr;
	}

	private static void swap(int[] a, int i, int j) {
		int temp = a[i];
		a[i] = a[j];
		a[j] = temp;
	}

	/**
	 * 快速排序
	 * <p>
	 * 基本思想：选择一个基准元素,通常选择第一个元素或者最后一个元素,通过一趟扫描，将待排序列分成两部分,一部分比基准元素小,一部分大于等于基准元素,
	 * 此时基准元素在其排好序后的正确位置,然后再用同样的方法递归地排序划分的两部分。
	 * 
	 * @see 快速排序是不稳定的排序。 时间复杂度为O(nlogn)。
	 * @param a
	 */
	public static void quick_sort(int[] a) {
		if (a.length > 0) {
			quickSort(a, 0, a.length - 1);
		}
	}

	private static void quickSort(int[] a, int low, int high) {
		if (low < high) { // 如果不加这个判断递归会无法退出导致堆栈溢出异常
			int middle = getMiddle(a, low, high);
			quickSort(a, 0, middle - 1);
			quickSort(a, middle + 1, high);
		}
	}

	private static int getMiddle(int[] a, int low, int high) {
		int temp = a[low];// 基准元素
		while (low < high) {
			// 找到比基准元素小的元素位置
			while (low < high && a[high] >= temp) {
				high--;
			}
			a[low] = a[high];
			while (low < high && a[low] <= temp) {
				low++;
			}
			a[high] = a[low];
		}
		a[low] = temp;
		return low;
	}

	/**
	 * 直接插入排序
	 * <p>
	 * 基本思想：每步将一个待排序的记录，按其顺序码大小插入到前面已经排序的字序列的合适位置（从后向前找到合适位置后），直到全部插入排序完为止。
	 * 
	 * @see 直接插入排序是稳定的排序。
	 * @param a
	 */
	public static void insert_sort1(int[] a) {
		for (int i = 1; i < a.length; i++) {
			// 待插入元素
			int temp = a[i];
			int j;

			// for (j = i-1; j>=0 && a[j]>temp; j--) {
			// //将大于temp的往后移动一位
			// a[j+1] = a[j];
			// }

			for (j = i - 1; j >= 0; j--) {
				// 将大于temp的往后移动一位
				if (a[j] > temp) {
					a[j + 1] = a[j];
				} else {
					break;
				}
			}
			a[j + 1] = temp;
		}
	}

	/**
	 * 二分插入排序
	 * <p>
	 * 基本思想：二分法插入排序的思想和直接插入一样，只是找合适的插入位置的方式不同，这里是按二分法找到合适的位置，可以减少比较的次数。
	 * 
	 * @see 二分法插入排序是稳定的
	 * @param a
	 */
	public static void insert_sort2(int[] a) {
		for (int i = 0; i < a.length; i++) {
			int temp = a[i];
			int left = 0;
			int right = i - 1;
			int mid = 0;
			while (left <= right) {
				mid = (left + right) / 2;
				if (temp < a[mid]) {
					right = mid - 1;
				} else {
					left = mid + 1;
				}
			}
			for (int j = i - 1; j >= left; j--) {
				a[j + 1] = a[j];
			}
			if (left != i) {
				a[left] = temp;
			}
		}
	}

	/**
	 * 希尔排序
	 * <p>
	 * 基本思想：先取一个小于n的整数d1作为第一个增量，把文件的全部记录分成d1个组。所有距离为d1的倍数的记录放在同一个组中。
	 * 先在各组内进行直接插入排序；然后，取第二个增量d2<d1重复上述的分组和排序，直至所取的增量dt=1(dt<dt-l<…<d2<d1)，
	 * 即所有记录放在同一组中进行直接插入排序为止。该方法实质上是一种分组插入方法。
	 * 
	 * @see 希尔排序是不稳定
	 * @param arr
	 * @return
	 */
	public static void shell_sort(int[] a) {
		int d = a.length;
		while (true) {
			d = d / 2;
			for (int x = 0; x < d; x++) {
				for (int i = x + d; i < a.length; i = i + d) {
					int temp = a[i];
					int j;
					for (j = i - d; j >= 0 && a[j] > temp; j = j - d) {
						a[j + d] = a[j];
					}
					a[j + d] = temp;
				}
			}
			if (d == 1) {
				break;
			}
		}
	}

	/**
	 * 简单的选择排序
	 * <p>
	 * 1、基本思想：在要排序的一组数中，选出最小的一个数与第一个位置的数交换；然后在剩下的数当中再找最小的与第二个位置的数交换，
	 * 如此循环到倒数第二个数和最后一个数比较为止。
	 * 
	 * @see 简单选择排序是不稳定的排序。 时间复杂度：T(n)=O(n2)。
	 * @param a
	 */
	public static void select_sort(int[] a) {
		// 简单的选择排序
		for (int i = 0; i < a.length; i++) {
			int min = a[i];
			int n = i; // 最小数的索引
			for (int j = i + 1; j < a.length; j++) {
				if (a[j] < min) { // 找出最小的数
					min = a[j];
					n = j;
				}
			}
			a[n] = a[i];
			a[i] = min;
		}
	}

	// 对data数组从0到lastIndex建大顶堆
	private static void buildMaxHeap(int[] data, int lastIndex) {
		// 从lastIndex处节点（最后一个节点）的父节点开始
		for (int i = (lastIndex - 1) / 2; i >= 0; i--) {
			// k保存正在判断的节点
			int k = i;
			// 如果当前k节点的子节点存在
			while (k * 2 + 1 <= lastIndex) {
				// k节点的左子节点的索引
				int biggerIndex = 2 * k + 1;
				// 如果biggerIndex小于lastIndex，即biggerIndex+1代表的k节点的右子节点存在
				if (biggerIndex < lastIndex) {
					// 若果右子节点的值较大
					if (data[biggerIndex] < data[biggerIndex + 1]) {
						// biggerIndex总是记录较大子节点的索引
						biggerIndex++;
					}
				}
				// 如果k节点的值小于其较大的子节点的值
				if (data[k] < data[biggerIndex]) {
					// 交换他们
					swap(data, k, biggerIndex);
					// 将biggerIndex赋予k，开始while循环的下一次循环，重新保证k节点的值大于其左右子节点的值
					k = biggerIndex;
				} else {
					break;
				}
			}
		}
	}

	/**
	 * 堆排序
	 * <p>
	 * 思想:初始时把要排序的数的序列看作是一棵顺序存储的二叉树，调整它们的存储序，使之成为一个
	 * 堆，这时堆的根节点的数最大。然后将根节点与堆的最后一个节点交换。然后对前面(n-1)个数重新调整使之成为堆。依此类推，直到只有两个节点的堆，并对
	 * 它们作交换，最后得到有n个节点的有序序列。从算法描述来看，堆排序需要两个过程，一是建立堆，二是堆顶与堆的最后一个元素交换位置。
	 * 所以堆排序有两个函数组成。一是建堆的渗透函数，二是反复调用渗透函数实现排序的函数。
	 * 
	 * @see 堆排序也是一种不稳定的排序算法
	 * @param a
	 */
	public static void heap_sort(int[] a) {
		int arrayLength = a.length;
		// 循环建堆
		for (int i = 0; i < arrayLength - 1; i++) {
			// 建堆
			buildMaxHeap(a, arrayLength - 1 - i);
			// 交换堆顶和最后一个元素
			swap(a, 0, arrayLength - 1 - i);
			// System.out.println(Arrays.toString(a));
		}
	}

}
