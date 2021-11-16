import time

import numpy as np


def mandelbrot():
    pmin, pmax, qmin, qmax = -2.5, 1.5, -2, 2
    ppoints, qpoints = 200, 200
    max_iterations = 400
    infinity_border = 100
    image = np.zeros((ppoints, qpoints))
    for ip, p in enumerate(np.linspace(pmin, pmax, ppoints)):
        for iq, q in enumerate(np.linspace(qmin, qmax, qpoints)):
            c = p + 1j * q
            z = 0
            for k in range(max_iterations):
                z = z ** 2 + c
                if abs(z) > infinity_border:
                    image[ip, iq] = 1
                    break
    return image

if __name__ == '__main__':
    tic = time.perf_counter()
    mandelbrot()
    toc = time.perf_counter()
    print(toc - tic, "s")