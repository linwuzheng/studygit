import java.util.ArrayList;
import java.util.List;

/**
 * 解决实习留下来的疑问：
 * 1. for语句的性能问题
 * 2. boolean条件语句的执行
 */
public class SolveForAndBoolean {
	static List<String> list = new ArrayList<>();
	static {
		list.add("1");
		list.add("2");
		list.add("3");
		list.add("4");
		list.add("5");
	}

	private static List<String> getArray() {
		System.out.println("***");
		return list;
	}

	public static void main(String[] args) {
		int len = getLength();
		for (int i = 0; i < len; i++) {
			System.out.print(i);
		}
		System.out.println();
		System.out.println("===============");
		for (int i = 0; i < getLength(); i++) {
			System.out.print(i);
		}

		List<String> al = getArray();
		for (String string : al) {
			System.out.print(string);
		}
		System.out.println();
		System.out.println("===============");
		for (String string : getArray()) {
			System.out.print(string);
		}

		/**
		 * true||false
		 * false||true
		 * (true||false)&&false
		 * (true||false)&&true
		 * (true&&false)||false
		 * (true&&false)||true
		 * (false||true)&&false
		 * (false||true)&&true
		 */
		if ((getTrue()) || getFalse()) {
			System.out.println("true||false");
		}
		System.out.println("================");
		if ((getFalse()) || getTrue()) {
			System.out.println("false||true");
		}
	}

	private static boolean getFalse() {
		System.out.println("getFalse()");
		return false;
	}

	private static boolean getTrue() {
		System.out.println("getTrue()");
		return true;
	}

	private static int getLength() {
		System.out.println("...");
		return 5;
	}

}
